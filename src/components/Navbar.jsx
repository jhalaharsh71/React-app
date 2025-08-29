import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "./CartContext";
import "../index.css"  
import Loginregister from "./Loginregister";

function MyNavbar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { cartCount } = useCart();  

  function handleSubmit(e) {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
    setSearchInput("");
  }

  return (
    <>
      <Navbar
        bg="white"
        sticky="top"
        expand="lg"
        className="d-none d-lg-flex border-bottom"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            MyBrand
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Men">MEN</Nav.Link>
            <Nav.Link as={Link} to="/Women">WOMEN</Nav.Link>
            <Nav.Link as={Link} to="/Sneakers">SNEAKERS</Nav.Link>
            <Nav.Link as={Link} to="/About">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/Contact">CONTACT</Nav.Link>
          </Nav>

          {/* Search bar */}
          <form
            onSubmit={handleSubmit}
            style={{ position: "relative", flex: 1, margin: "0 20px" }}
          >
            <input
              type="text"
              placeholder="          Search for Products, Brands and More"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "whitesmoke",
              }}
            />
            {!searchInput && (
              <i
                className="bi bi-search"
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "gray",
                }}
              />
            )}
          </form>

          <div className="d-flex align-items-center" style={{ position: "relative" }}>
            <Nav.Link 
              as={Link} 
              to="/cart" 
              style={{ 
                position: "relative", 
                display: "flex", 
                alignItems: "center",
                padding: "0.5rem",
                borderRadius: "50%",
                transition: "background-color 0.2s ease"
              }}
              className="hover-cart"
            >
              <i
                className="bi bi-cart3"
                style={{ 
                  fontSize: "1.5rem", 
                  marginRight: "0.5rem", 
                  color: "black",
                  transition: "transform 0.2s ease"
                }}
              />
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    backgroundColor: "#ff3b30",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    animation: cartCount > 0 ? "pulse 1.5s infinite" : "none"
                  }}
                >
                  {cartCount}
                </span>
              )}
            </Nav.Link>
            <Loginregister/>
          </div>
        </Container>
      </Navbar>

      <Navbar
        bg="white"
        sticky="top"
        className="d-flex d-lg-none border-bottom"
      >
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            MyBrand
          </Navbar.Brand>

          <form
            onSubmit={handleSubmit}
            style={{ position: "relative", flex: 1, margin: "0 10px" }}
          >
            <input
              type="text"
              placeholder="          Search for Products, Brands and More"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              style={{
                width: "100%",
                height: "35px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "whitesmoke",
                fontSize: "14px",
              }}
            />
            {!searchInput && (
              <i
                className="bi bi-search"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "gray",
                  fontSize: "14px",
                }}
              />
            )}
          </form>

          <div className="d-flex align-items-center">
            <Nav.Link 
              as={Link} 
              to="/cart" 
              style={{ 
                position: "relative", 
                display: "flex", 
                alignItems: "center",
                padding: "0.4rem",
                borderRadius: "50%",
                transition: "background-color 0.2s ease"
              }}
              className="hover-cart"
            >
              <i
                className="bi bi-cart3"
                style={{ 
                  fontSize: "1.3rem", 
                  marginRight: "0.8rem", 
                  color: "black",
                  transition: "transform 0.2s ease"
                }}
              />
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-2px",
                    right: "5px",
                    backgroundColor: "#ff3b30",
                    color: "white",
                    borderRadius: "50%",
                    width: "18px",
                    height: "18px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    animation: cartCount > 0 ? "pulse 1.5s infinite" : "none"
                  }}
                >
                  {cartCount}
                </span>
              )}
            </Nav.Link>
            <Loginregister />
          </div>
        </Container>
      </Navbar>

      {/* Mobile Navbar (menu row) */}
      <Navbar bg="light" className="d-flex d-lg-none border-bottom">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/Men">MEN</Nav.Link>
            <Nav.Link as={Link} to="/Women">WOMEN</Nav.Link>
            <Nav.Link as={Link} to="/Sneakers">SNEAKERS</Nav.Link>
            <Nav.Link as={Link} to="/About">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/Contact">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     
    </>
  );
}

export default MyNavbar;