import Slider from "./Slider";
import Homeproduct from "./Homeproduct";
import Homeslider from "./Homeslider";
import offer from "../assets/offer.webp";
import Homeslider2 from "./Homeslider2";
import "../index.css";
function Home() {
  return (
    <>
      <Slider />
      <img src={offer} width="100%" height="auto" alt="Offer" />

      <div className="container-fluid" style={{ backgroundImage:"linear-gradient(yellow, orange)", marginTop:"7px" }}>
        <h3 className="home" >MEN</h3>
      </div>

      <Homeslider />

      <div className="container-fluid" style={{ backgroundImage:"linear-gradient(yellow, orange)", marginTop:"7px" }}>
        <h3 className="home" >WOMEN</h3>
      </div>

      <Homeslider2 />

      <div className="container my-4">
        <Homeproduct cols={3} />
      </div>
    </>
  );
}

export default Home;
