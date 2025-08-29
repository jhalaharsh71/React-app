import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import { Route, Routes } from "react-router-dom";
import Sneakers from "./components/Sneakers";
import Banner2 from "./components/Banner2";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CartPage from "./components/Cartpage";
import Home from "./components/Home";
import ProductPage from "./components/Productpage";
import Scrolltotop from "./components/Scrolltotop";
import Search from "./components/Search";
import { CartProvider } from "./components/Cartcontext";

const RootComponent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hasNavigated = sessionStorage.getItem("hasNavigated");

    if (hasNavigated) {
      setShowSplash(false);
    }
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" && !sessionStorage.getItem("hasNavigated")) {
      sessionStorage.setItem("hasNavigated", "true");
      setShowSplash(false);
    }
  }, [location]);

  if (showSplash && location.pathname === "/") {
    return <Banner2 />;
  }

  return <Home />;
};

const NavigationTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      sessionStorage.setItem("hasNavigated", "true");
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <NavigationTracker />
        <Scrolltotop />
        <Routes>
          <Route path="/" element={<RootComponent />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
           <Route path="/search" element={<Search />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          {/* Nested route (must use outlet to render ) */}
          <Route path="/Men" element={<Men />}></Route>

          {/* Nested route (must use outlet to render ) */}
          <Route path="/Women" element={<Women />}></Route>

          <Route path="/Sneakers" element={<Sneakers />} />
        </Routes>

        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
