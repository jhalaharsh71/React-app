import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  const usdToInr = (usd) => Math.round(usd * 84);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await res.json();
        setProduct(data);
        if (data.images && data.images.length > 0) {
          setMainImage(data.images[0]); 
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Loading product...</p>;
  if (!product) return <p className="text-center mt-5">Product not found</p>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 d-flex">
          <div className="d-flex flex-column me-3">
            {product.images &&
              product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  className="img-thumbnail mb-2"
                  style={{
                    width: "70px",
                    height: "70px",
                    cursor: "pointer",
                    objectFit: "cover",
                    border:
                      mainImage === img ? "2px solid #007bff" : "1px solid #ddd",
                  }}
                  onClick={() => setMainImage(img)}
                />
              ))}
          </div>

          <div className="flex-grow-1 text-center">
            <img
              src={mainImage}
              alt={product.title}
              className="img-fluid border"
              style={{ maxHeight: "450px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="col-md-6">
          <h3 className="fw-bold">{product.title}</h3>
          <p className="text-muted">{product.description}</p>
          <h4 className="fw-bold text-success">₹{usdToInr(product.price)}</h4>

          <div className="mt-4">
            <button className="btn btn-warning btn-lg me-3">
              <i className="bi bi-cart3"></i> Add to Cart
            </button>
            <button className="btn btn-success btn-lg">
              <i className="bi bi-lightning-charge-fill"></i> Buy Now
            </button>
          </div>

          <div className="mt-4">
            <Link to="/" className="btn btn-outline-secondary">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
