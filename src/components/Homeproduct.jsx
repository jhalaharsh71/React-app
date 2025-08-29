import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCart } from "./Cartcontext"; 

function Homeproduct({ cols = 4, filters }) {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setAllItems(data);
      setItems(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = allItems;

    if (filters?.categories?.length > 0) {
      filtered = filtered.filter((p) =>
        filters.categories.some((cat) =>
          p.category.name.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }

    if (filters?.brands?.length > 0) {
      filtered = filtered.filter((p) =>
        filters.brands.some((brand) =>
          p.title.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }

    if (filters?.price) {
      filtered = filtered.filter((p) => p.price * 84 <= filters.price);
    }

    if (filters?.rating) {
      filtered = filtered.filter(
        (p) => (p.rating?.rate || 5) >= filters.rating
      );
    }

    setItems(filtered);
  }, [filters, allItems]);

  const usdToInr = (usd) => Math.round(usd * 84);

  return (
    <div className="container my-4">
      {items.length > 0 ? (
        <div className="row">
          {items.map((item) => (
            <div className={`col-md-${12 / cols} d-flex`} key={item.id}>
              <Link
                to={`/product/${item.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="card m-2 flex-fill">
                  <img
                    src={item.images[0]}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p
                      className="card-text"
                      style={{
                        maxHeight: "100px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.description}
                    </p>
                    <p className="fw-bold">₹{usdToInr(item.price)}</p>
                    <button
                      className="btn btn-success mt-2"
                      onClick={(e) => {
                        e.preventDefault(); 
                        addToCart(item);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default Homeproduct;
