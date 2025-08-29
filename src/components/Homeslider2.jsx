import { Carousel } from "react-bootstrap";
import wdress from "../assets/Wdress.avif";
import wpants from "../assets/Wpants.avif";
import wshirt from "../assets/Wshirt.avif";
import wtshirt from "../assets/Wtshirt.avif";
import wsneakers from "../assets/Wsneakers.avif";
import wtop from "../assets/wtop.avif";
import wjacket from "../assets/Wjacket.avif";
import wperfume from "../assets/Wperfume.avif";
import wjeans from "../assets/Wjeans.avif";

const images = [wdress, wpants, wshirt, wtshirt, wsneakers, wtop, wjacket,wperfume, wjeans ];

function Homeslider2() {
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

export default Homeslider2;
