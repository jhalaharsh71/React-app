import optionimg from "./option.webp";
import Option from "./Option";
import "../index.css";

function Banner2() {
  return (
    <div className="my-container-fluid">
      <div className="row">
        <div className="col">
          <div className="container">
            <Option />
          </div>
          <img src={optionimg} alt="banner" className="banner-background-img" />
        </div>
      </div>
    </div>
  );
}

export default Banner2;
