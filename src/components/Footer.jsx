import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>

function Footer() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({ name: "", phone: "", email: "", message: "" });
    
    alert("Thank you for your message! We'll get back to you soon.");
  }

  const inputStyle = {
    backgroundColor: "white",
    color: "#333",
    border: "none",
    borderBottom: "2px solid #6c757d",
    height: "50px",
    marginBottom: "15px",
    width: "100%",
    padding: "0 10px",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "auto",
    padding: "10px",
  };

  const buttonStyle = {
    width: "100%",
    height: "50px",
    marginBottom: "15px",
    border: "2px solid black",
    backgroundColor: "black",
    color: "whitesmoke",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <footer className="footer-container" style={{ backgroundColor: "whitesmoke", color: "#333" }}>
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-column">
            <h3 style={{ color: "#333" }}>Men</h3>
            <ul>
              <li style={{ color: "#333", textDecoration: "none" }}>T-shirts</li>
              <li style={{ color: "#333", textDecoration: "none" }}>Shirts</li>
              <li style={{ color: "#333", textDecoration: "none" }}>Jeans</li>
              <li style={{ color: "#333", textDecoration: "none" }}>Shoes</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 style={{ color: "#333" }}>Women</h3>
             <ul>
              <li style={{ color: "#333", textDecoration: "none" }}>T-shirts</li>
              <li style={{ color: "#333", textDecoration: "none" }}>Shirts</li>
              <li style={{ color: "#333", textDecoration: "none" }}>Jeans</li>
              <li style={{ color: "#333", textDecoration: "none" }}>Shoes</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 style={{ color: "#333" }}>Sneakers</h3>
             <ul>
              <li style={{ color: "#333", textDecoration: "none" }}>Nike</li>
              <li style={{ color: "#333", textDecoration: "none" }}>Adidas</li>
              <li style={{ color: "#333", textDecoration: "none" }}>Puma</li>
              <li style={{ color: "#333", textDecoration: "none" }}>Jordens</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 style={{ color: "#333" }}>Company</h3>
            <ul>
              <li><Link to="/about" style={{ color: "#333", textDecoration: "none" }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: "#333", textDecoration: "none" }}>Contact</Link></li>
              <li style={{ color: "#333", textDecoration: "none" }}>Privacy Policy</li>
              <li style={{ color: "#333", textDecoration: "none" }}>Terms of Service</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 style={{ color: "#333" }}>Stay Connected</h3>
             <div className="social-icons">
              <a  aria-label="Facebook" style={{color:"white"}}><i className="fab fa-facebook-f"></i></a>
              <a  aria-label="Instagram" style={{color:"white"}} ><i className="fab fa-instagram"></i></a>
              <a  aria-label="Twitter" style={{color:"white"}} ><i className="fab fa-twitter"></i></a>
              <a  aria-label="Pinterest" style={{color:"white"}}><i className="fab fa-pinterest-p"></i></a>
            </div>
            <div className="newsletter">
              <h4 style={{ color: "#333" }}>Subscribe to our newsletter</h4>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-section" id="section1">
          <h2 style={{ color: "#333", fontWeight: "bold", paddingTop: "2rem" }}>GET IN TOUCH</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row" style={{ display: "flex", gap: "4%" }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                style={{ ...inputStyle, width: "48%" }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                style={{ ...inputStyle, width: "48%" }}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              style={textareaStyle}
            ></textarea>
            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
        </div>

        <div className="contact-info" style={{ textAlign: "center", marginTop: "2rem" }}>
          <p style={{ display: "inline", marginRight: "20px" }}><i className="fas fa-phone" style={{ marginRight: "5px" }}></i> (+91) 7415006902</p>
          <p style={{ display: "inline", marginRight: "20px" }}><i className="fas fa-envelope" style={{ marginRight: "5px" }}></i> harshvardhansinghjhala122@gmail.com</p>
          <p style={{ display: "inline" }}><i className="fas fa-map-marker-alt" style={{ marginRight: "5px" }}></i> 123 Market Street, Dewas, Madhya pradesh, India</p>
        </div>
      </div>

      <div className="copyright" style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "1rem 2rem",
        borderTop: "1px solid #ddd",
        marginTop: "2rem"
      }}>
        <p style={{ color: "#333", margin: 0 }}>&copy; {new Date().getFullYear()} My Brand. All rights reserved.</p>
        <div className="payment-methods">
          <i className="fab fa-cc-visa" style={{ color: "#333", marginLeft: "10px" }}></i>
          <i className="fab fa-cc-mastercard" style={{ color: "#333", marginLeft: "10px" }}></i>
          <i className="fab fa-cc-paypal" style={{ color: "#333", marginLeft: "10px" }}></i>
          <i className="fab fa-cc-apple-pay" style={{ color: "#333", marginLeft: "10px" }}></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;