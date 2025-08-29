import Handcraft from "./Handcraft.jpg";
import "../index.css";
import { FaHandHoldingHeart, FaLeaf, FaHeart, FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";
import craft1 from "../assets/craft1.jpg"
import craft2 from "../assets/craft2.jpg"
import craft3 from "../assets/craft3.jpg"
import craft4 from "../assets/craft4.jpg"
import craft5 from "../assets/craft5.jpg"
import craft6 from "../assets/craft6.jpg"
import craft7 from "../assets/craft7.jpg"

function About() {
  return (
    <div className="about-page">
      <div className="hero-section position-relative">
        <img 
          src={Handcraft} 
          alt="Handcrafted products" 
          className="hero-image w-100"
          style={{ height: "80vh", objectFit: "cover" }}
        />
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div className="container text-center text-white">
            <h1 className="display-3 fw-bold mb-4">Every Product is Handcrafted</h1>
            <p className="lead mb-4">Discover the artistry behind each unique creation</p>
            <button className="btn btn-primary btn-lg px-4 py-2 rounded-pill">
              Explore Our Story
            </button>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <section className="mb-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4 display-5">About Us</h2>
              <p className="lead mb-4">
                Welcome to <strong className="text-primary">Artisan Crafts</strong>, a home for beautifully
                handcrafted creations designed to bring warmth, style, and
                authenticity into your everyday life.
              </p>
              <p className="about-text">
                Our story began with a simple yet powerful idea that
                shopping should be personal, meaningful, and rooted in quality. In
                today's fast-paced world of mass production, we wanted to create a
                space where every product has a story, every detail matters, and every
                purchase supports real artisans who pour their heart and soul into
                their work.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src={craft4} width={"100%"} height={"100%"}
                alt="Artisan crafting products" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section className="mb-5">
          <h2 className="fw-bold mb-4 display-5">Our Story</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <img 
                src={craft5} width={"80%"} height={"70%"}
                alt="Our workshop space" 
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6">
              <p className="about-text">
                What started as a small passion project has grown into a vibrant
                community of creators and shoppers who share one common belief:
                <strong className="text-primary"> handmade is timeless</strong>. Each item in our collection
                reflects hours of dedication, creativity, and craftsmanship.
              </p>
              <p className="about-text">
                From the first sketch to the final touch, our artisans carefully craft every
                product, making sure it carries a uniqueness that no factory machine
                can replicate. We are proud to collaborate with skilled craftspeople
                from across the country, blending traditional techniques with modern
                designs.
              </p>
              <p className="about-text">
                From the first sketch to the final touch, our artisans carefully craft every
                product, making sure it carries a uniqueness that no factory machine
                can replicate. We are proud to collaborate with skilled craftspeople
                from across the country, blending traditional techniques with modern
                designs.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section className="mb-5">
          <h2 className="fw-bold mb-4 display-5">Our Mission</h2>
          <p className="about-text mb-4">
            At <strong className="text-primary">Artisan Crafts</strong>, our mission is simple — to bring the
            beauty of handcrafted products to your doorstep while empowering
            artisans and sustaining traditional skills.
          </p>
          <p className="about-text mb-4">
            We believe that every purchase has power. By choosing handcrafted, you're choosing:
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaHandHoldingHeart className="text-primary mb-3" size="2.5em" />
                  <h5 className="card-title">Authenticity</h5>
                  <p className="card-text">Products made with care, skill, and a personal touch</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaLeaf className="text-primary mb-3" size="2.5em" />
                  <h5 className="card-title">Sustainability</h5>
                  <p className="card-text">Slow-made goods that respect nature and reduce waste</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaHeart className="text-primary mb-3" size="2.5em" />
                  <h5 className="card-title">Fairness</h5>
                  <p className="card-text">Supporting artisans with fair pay and meaningful opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section className="mb-5">
          <h2 className="fw-bold mb-4 display-5">Why Handcrafted?</h2>
          
          <div className="row">
            <div className="col-md-6">
              <p className="about-text mb-4">
            Handcrafted products are more than just items – they are stories you
            can hold in your<br/> hands. Each piece carries the fingerprint of the
            artisan who made it, turning everyday <br/> objects into treasures filled
            with character and charm.
          </p>
              <div className="d-flex mb-3">
                
                <div className="me-3 text-primary">
                  <FaHandHoldingHeart size="1.5em" />
                </div>
                <div>
                  
                  <h5>Uniqueness</h5>
                  <p className="about-text">No two products are exactly the same</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="me-3 text-primary">
                  <FaLeaf size="1.5em" />
                </div>
                <div>
                  <h5>Eco-consciousness</h5>
                  <p className="about-text">Ethical materials and sustainable practices</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="me-3 text-primary">
                  <FaHeart size="1.5em" />
                </div>
                <div>
                  <h5>Connection</h5>
                  <p className="about-text">A bond between you and the maker</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img 
                src={craft6} width={"90%"} height={"90%"}
                alt="Handcrafted products showcase" 
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section className="mb-5">
          <h2 className="fw-bold mb-4 display-5">Our Craftsmanship</h2>
          <p className="about-text mb-4">
            Browse through some examples of our artisans' meticulous work and attention to detail.
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <img 
                src={craft6} width={"100%"} height={"100%"}
                alt="Handcrafted pottery" 
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-4 mb-4">
              <img 
                src={craft2} width={"100%"} height={"100%"}
                alt="Handwoven textiles" 
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-4 mb-4">
              <img 
                src={craft3} width={"100%"} height={"100%"}
                alt="Handcrafted woodwork" 
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section className="mb-5">
          <h2 className="fw-bold mb-4 display-5">Why Shop With Us?</h2>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="d-flex">
                <div className="me-3 text-primary mt-1">
                  <FaHandHoldingHeart size="1.2em" />
                </div>
                <div>
                  <h6>100% handcrafted products with a story behind each one</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="d-flex">
                <div className="me-3 text-primary mt-1">
                  <FaLeaf size="1.2em" />
                </div>
                <div>
                  <h6>Ethically sourced and sustainably made</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="d-flex">
                <div className="me-3 text-primary mt-1">
                  <FaHeart size="1.2em" />
                </div>
                <div>
                  <h6>Fair partnerships with local artisans and makers</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="d-flex">
                <div className="me-3 text-primary mt-1">
                  <FaShippingFast size="1.2em" />
                </div>
                <div>
                  <h6>Fast & reliable shipping to your doorstep</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="d-flex">
                <div className="me-3 text-primary mt-1">
                  <FaShieldAlt size="1.2em" />
                </div>
                <div>
                  <h6>Secure payments & hassle-free returns</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="d-flex">
                <div className="me-3 text-primary mt-1">
                  <FaHeadset size="1.2em" />
                </div>
                <div>
                  <h6>Friendly and responsive customer support</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section className="mb-5">
          <h2 className="fw-bold mb-4 display-5">Our Promise</h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="promise-card p-4 p-md-5 rounded shadow-sm bg-light border-0">
                <p className="about-text mb-4">
                  We promise to always put quality, transparency, and care at the heart
                  of everything we do. Every product you buy is more than just an object
                  – it's a celebration of creativity, a support to artisans, and a small
                  step towards a more sustainable future.
                </p>
                <p className="about-text mb-4">
                  At <strong className="text-primary">Artisan Crafts</strong>, you're
                  not just a customer – you're part of a growing movement that values
                  people over machines, craftsmanship over shortcuts, and authenticity
                  over trends.
                </p>
                <p className="about-text">
                  Thank you for choosing us and for supporting the art of
                  handcrafting. Together, we can keep traditions alive and make the
                  world a more beautiful place, one handmade product at a time.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <img 
                src={craft7} width={"100%"} height={"100%"}
                alt="Our quality promise" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;