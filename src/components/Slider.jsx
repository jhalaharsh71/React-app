import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

function Slider() {
  return (
    <Carousel interval={2000} wrap={true} fade={true} pause={false} >
      <Carousel.Item>
        <img
          className=" my-slide d-block"
          src={slide1}
          alt="First slide"
          style={{ objectFit: "cover" }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className=" my-slide d-block "
          src={slide2}
          alt="Second slide"
          style={{  objectFit: "cover" }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className=" my-slide d-block "
          src={slide3}
          alt="Third slide"
          style={{  objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
