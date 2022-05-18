import "./styles.css";
import { Dropdown, DropdownContent, DropdownItem } from "./components/Dropdown";
import MoreIcon from "./components/MoreIcon";

function App() {
  return (
    <div className="app">
      <Dropdown icon={<MoreIcon size={32} />}>
        <DropdownContent>
          <DropdownItem>
            <a href="/#">Rename</a>
          </DropdownItem>
          <DropdownItem>
            <a href="/#"> Delete</a>
          </DropdownItem>
          <DropdownItem>
            <a href="/#"> Share</a>
          </DropdownItem>
          <DropdownItem>
            <button onClick={() => console.log(123)}>Action</button>
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
}

export default App;
