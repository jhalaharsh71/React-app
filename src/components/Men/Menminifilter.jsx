import Dropdown from "react-bootstrap/Dropdown";
import Manfilter from "./Manfilter";

function BasicExample() {
  return (
    <div className="d-lg-none">
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <i className="bi bi-funnel" />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ padding: "10px", minWidth: "250px" }}>
        <Manfilter />
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default BasicExample;
