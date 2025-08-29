import { Carousel } from "react-bootstrap";
import tee from "../assets/T-shirt.avif";
import pant from "../assets/jeans.avif";
import shirt from "../assets/shirt.avif";
import shorts from "../assets/shorts.avif";
import shoes from "../assets/shoes.avif";
import boxer from "../assets/boxer.avif";
import polo from "../assets/polo.avif";
import backpack from "../assets/backpack.avif";
import slides from "../assets/slides.avif";

const images = [tee, pant, shirt, shorts, shoes, boxer, backpack,polo, slides];

function Homeslider() {
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3));
  }

  return (
    <Carousel indicators={false} controls={false} interval={2000} wrap={true} style={{backgroundColor:"black", padding:"30px 10px", marginTop:"0px"}}>
      {groupedImages.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center gap-3">
            {group.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`slide-${index}-${idx}`}
                style={{
                  width: "30%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Homeslider;
