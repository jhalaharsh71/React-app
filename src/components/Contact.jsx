import "../index.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>


const ContactPage = () => {
  return (
    <div style={{ 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
      color: "#333", 
      lineHeight: 1.6,
      maxWidth: "1200px", 
      margin: "0 auto",
      padding: "0 1rem"
    }}>
      <div style={{ 
        textAlign: "center", 
        padding: "3rem 1rem",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        borderRadius: "0 0 10px 10px",
        marginBottom: "2rem"
      }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          marginBottom: "1rem", 
          color: "#2c3e50" 
        }}>
          Contact Us
        </h1>
        <p style={{ 
          fontSize: "1.2rem", 
          maxWidth: "800px", 
          margin: "0 auto",
          color: "#34495e"
        }}>
          We love hearing from our customers! Whether it's a question, feedback, or just to say hello,
          we're here to make your shopping experience seamless and enjoyable.
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "2rem", 
        marginBottom: "3rem" 
      }}>
        <div style={{ 
          backgroundColor: "white", 
          borderRadius: "10px", 
          padding: "1.5rem", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
          borderTop: "4px solid #3498db"
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <div style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#ebf5fb",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "1rem"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h2 style={{ margin: 0, color: "#2c3e50" }}>Customer Support</h2>
          </div>
          <p style={{ marginBottom: "1rem" }}>Have questions about a product, your order, or our services? Our customer support team is here to help.</p>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> support@yourstore.com</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Phone:</strong> +91 7415006902</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Working Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM IST</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Response Time:</strong> Typically within 24 hours</li>
          </ul>
          <p>You can also reach us via live chat on our website during working hours for instant support.</p>
        </div>

        <div style={{ 
          backgroundColor: "white", 
          borderRadius: "10px", 
          padding: "1.5rem", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
          borderTop: "4px solid #2ecc71"
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <div style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#eafaf1",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "1rem"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h2 style={{ margin: 0, color: "#2c3e50" }}>Order Assistance & Tracking</h2>
          </div>
          <p style={{ marginBottom: "1rem" }}>Track your orders, manage returns, or report an issue:</p>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><a  style={{ color: "#3498db", textDecoration: "none" }}>Track Your Order</a></li>
            <li style={{ marginBottom: "0.5rem" }}><a style={{ color: "#3498db", textDecoration: "none" }}>Returns & Refunds</a></li>
            <li style={{ marginBottom: "0.5rem" }}><a  style={{ color: "#3498db", textDecoration: "none" }}>Shipping Information</a></li>
          </ul>
          <p>Our goal is to ensure your order reaches you quickly and safely.</p>
        </div>

        <div style={{ 
          backgroundColor: "white", 
          borderRadius: "10px", 
          padding: "1.5rem", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
          borderTop: "4px solid #9b59b6"
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <div style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#f4ecf7",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "1rem"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9b59b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h2 style={{ margin: 0, color: "#2c3e50" }}>Business & Partnership Inquiries</h2>
          </div>
          <p style={{ marginBottom: "1rem" }}>Interested in collaborating or partnering with us? Reach out to our business development team:</p>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> business@yourstore.com</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Phone:</strong> +91-7415006902</li>
          </ul>
          <p>We're open to partnerships with brands, influencers, and service providers who share our passion for quality and craftsmanship.</p>
        </div>

        <div style={{ 
          backgroundColor: "white", 
          borderRadius: "10px", 
          padding: "1.5rem", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
          borderTop: "4px solid #e74c3c"
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <div style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#fdedec",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "1rem"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h2 style={{ margin: 0, color: "#2c3e50" }}>Visit Us</h2>
          </div>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Address:</strong> 123 Market Street, Dewas, Madhya pradesh, India</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Office Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM IST</li>
          </ul>
          <p>Please call ahead to schedule an appointment.</p>
        </div>

        <div style={{ 
          backgroundColor: "white", 
          borderRadius: "10px", 
          padding: "1.5rem", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
          borderTop: "4px solid #f39c12"
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <div style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#fef9e7",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "1rem"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12" y2="17"></line>
              </svg>
            </div>
            <h2 style={{ margin: 0, color: "#2c3e50" }}>FAQs & Help Center</h2>
          </div>
          <p style={{ marginBottom: "1rem" }}>Many questions can be answered quickly via our <a  style={{ color: "#3498db", textDecoration: "none" }}>FAQ / Help Center</a> covering:</p>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Order tracking</li>
            <li style={{ marginBottom: "0.5rem" }}>Payment issues</li>
            <li style={{ marginBottom: "0.5rem" }}>Shipping and delivery</li>
            <li style={{ marginBottom: "0.5rem" }}>Product care and warranties</li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: "white", 
          borderRadius: "10px", 
          padding: "1.5rem", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
          borderTop: "4px solid #1abc9c"
        }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <div style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#e8f8f5",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "1rem"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1abc9c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <h2 style={{ margin: 0, color: "#2c3e50" }}>Connect With Us</h2>
          </div>
          <p style={{ marginBottom: "1rem" }}>Stay in touch and never miss an update:</p>
          <div className="social-icons">
              <a  aria-label="Facebook" style={{color:"white"}}><i className="fab fa-facebook-f"></i></a>
              <a  aria-label="Instagram" style={{color:"white"}} ><i className="fab fa-instagram"></i></a>
              <a  aria-label="Twitter" style={{color:"white"}} ><i className="fab fa-twitter"></i></a>
              <a  aria-label="Pinterest" style={{color:"white"}}><i className="fab fa-pinterest-p"></i></a>
            </div>
        </div>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "2rem", 
        marginBottom: "3rem" 
      }}>
        <div style={{ 
          backgroundColor: "white", 
          borderRadius: "10px", 
          padding: "1.5rem", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          borderTop: "4px solid #3498db"
        }}>
          <h2 style={{ color: "#2c3e50" }}>Feedback & Suggestions</h2>
          <p style={{ marginBottom: "1rem" }}>Your feedback helps us improve. Please share suggestions about products, services, or website experience.</p>
          <a href="#section1" style={{ 
            display: "inline-block", 
            padding: "0.7rem 1.5rem", 
            backgroundColor: "#3498db", 
            color: "white", 
            borderRadius: "5px", 
            textDecoration: "none",
            fontWeight: "bold"
          }}>Feedback Form</a>
        </div>

        <div style={{ 
          backgroundColor: "white", 
          borderRadius: "10px", 
          padding: "1.5rem", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          borderTop: "4px solid #e74c3c"
        }}>
          <h2 style={{ color: "#2c3e50" }}>Emergency Support</h2>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Phone:</strong> +91-7415006902</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> urgent@yourstore.com</li>
          </ul>
          <p>For urgent order issues or concerns outside regular hours.</p>
        </div>
      </div>

      <div style={{ 
        textAlign: "center", 
        padding: "2rem", 
        marginTop: "2rem", 
        borderTop: "1px solid #eee",
        color: "#7f8c8d"
      }}>
        <p>We value your connection and look forward to assisting you!</p>
      </div>
    </div>
  );
};

export default ContactPage;