import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./styles.css";

function Dropdown({
  icon,
  tabIndex = 0,
  useAnimations = true,
  openingDirection = "right",
  closeOnClickOutside = true,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !closeOnClickOutside) return;

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeOnClickOutside, isOpen, dropdownRef]);

  function handleKeyDown(event) {
    if (event.keyCode === 40) {
      setIsOpen(true);
    }
  }

  return (
    <div
      ref={dropdownRef}
      tabIndex={tabIndex}
      className={classNames("dropdown", {
        left: openingDirection === "left",
        right: openingDirection === "right",
        "no-animation": !useAnimations,
      })}
      onClick={() => setIsOpen((prevState) => !prevState)}
      onKeyDown={handleKeyDown}
    >
      <div className="dropdown-header">{icon}</div>
      {isOpen && children}
    </div>
  );
}

function DropdownContent({ children }) {
  return (
    <div className="dropdown-content">
      <ul>{children}</ul>
    </div>
  );
}

function DropdownItem({ children }) {
  return <li className="dropdown-item">{children}</li>;
}

Dropdown.propTypes = {
  icon: PropTypes.element.isRequired,
  tabIndex: PropTypes.number,
  useAnimations: PropTypes.bool,
  openingDirection: PropTypes.oneOf(["left", "right"]),
  closeOnClickOutside: PropTypes.bool,
};

export { Dropdown, DropdownContent, DropdownItem };
