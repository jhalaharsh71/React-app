import male from "./male.jpg";
import female from "./female.jpg";
import { Link } from "react-router-dom";
import "../index.css"; 

function Option() {
  return (
    <div className="option-container">
      <Link to="/Men" className="option-card-link" id="optioncard1">
        <div className="option-card">
          <img src={male} className="option-card-img" alt="male fashion" />
          <div className="option-card-body">
            <h4 className="option-card-title">Men</h4>
          </div>
        </div>
      </Link>

      <Link to="/Women" className="option-card-link" id="optioncard2">
        <div className="option-card">
          <img src={female} className="option-card-img" alt="female fashion" />
          <div className="option-card-body">
            <h4 className="option-card-title">Women</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Option;
