import { useState, useEffect } from "react";

function Menfilter({ onFilterChange }) {
  const [priceRange, setPriceRange] = useState(20000);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [rating, setRating] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false); 
  const [showFilter, setShowFilter] = useState(true); 

  const handleCheckbox = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  useEffect(() => {
    onFilterChange({ categories, brands, price: priceRange, rating });
  }, [categories, brands, priceRange, rating]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledFromTop = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      if (totalHeight - scrolledFromTop < 900) {
        setShowFilter(false);
      } else {
        setShowFilter(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filterContent = (
    <>
      <div>
        <h6>Category</h6>
        {["Clothes", "Electronics", "Furniture", "Shoes"].map((cat) => (
          <div key={cat}>
            <input
              type="checkbox"
              checked={categories.includes(cat)}
              onChange={() => handleCheckbox(cat, categories, setCategories)}
            />
            <label className="ms-2">{cat}</label>
          </div>
        ))}
      </div>

      <hr />

      <div>
        <h6>Brand</h6>
        {["Nike", "Adidas", "Puma", "HRX"].map((brand) => (
          <div key={brand}>
            <input
              type="checkbox"
              checked={brands.includes(brand)}
              onChange={() => handleCheckbox(brand, brands, setBrands)}
            />
            <label className="ms-2">{brand}</label>
          </div>
        ))}
      </div>

      <hr />

      <div>
        <h6>Price</h6>
        <input
          type="range"
          min="500"
          max="50000"
          step="500"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-100"
        />
        <p>Under ₹{priceRange}</p>
      </div>

      <hr />

      <div>
        <h6>Customer Ratings</h6>
        <div>
          <input
            type="radio"
            name="rating"
            onChange={() => setRating(5)}
            checked={rating === 5}
          />
          <label className="ms-2">5★ </label>
        </div>
        <div>
          <input
            type="radio"
            name="rating"
            onChange={() => setRating(4)}
            checked={rating === 4}
          />
          <label className="ms-2">4★ & above</label>
        </div>
      </div>
    </>
  );

  return (
    <>
      {showFilter && (
        <div
          className="d-none d-lg-block"
          style={{
            width: "250px",
            height: "100vh",
            borderRight: "1px solid #ddd",
            padding: "15px",
            overflowY: "auto",
            position: "fixed",
          }}
        >
          <h5>Filters</h5>
          <hr />
          {filterContent}
        </div>
      )}

      <div className="d-lg-none p-2">
        <button
          className="btn btn-outline-secondary w-30"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <i className="bi bi-funnel" /> {showMobileFilters ? "▲" : "▼"}
        </button>

        {showMobileFilters && (
          <div className="border rounded p-3 mt-2 ">{filterContent}</div>
        )}
      </div>
    </>
  );
}

export default Menfilter;
