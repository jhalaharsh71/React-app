import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

function Search() {
  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const location = useLocation();
  const didFetch = useRef(false);

 
  const query = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    if (didFetch.current) return; 
    didFetch.current = true;

    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setAllItems(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  useEffect(() => {
    if (!query) {
      setItems(allItems);
      return;
    }

    const lowerQ = query.toLowerCase();

    const filtered = allItems.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerQ) || 
        p.description.toLowerCase().includes(lowerQ) || 
        p.category?.name.toLowerCase().includes(lowerQ) 
    );

    setItems(filtered);
  }, [query, allItems]);

  const usdToInr = (usd) => Math.round(usd * 84);

  return (
    <div className="container my-4">
      <h4>
        Search results for: <strong>{query}</strong>
      </h4>

      {items.length > 0 ? (
        <div className="row">
          {items.map((item) => (
            <div className="col-md-3 d-flex" key={item.id}>
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
                    style={{ maxHeight: "80px", overflow: "hidden" }}
                  >
                    {item.description}
                  </p>
                  <p className="fw-bold">₹{usdToInr(item.price)}</p>
                  <button className="btn btn-success mt-2">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default Search;
