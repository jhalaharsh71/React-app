import { useState } from "react";
import { useCart } from "./Cartcontext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const calculateSavings = () => {
    return cart.reduce((acc, item) => {
      if (item.price * 84 > 500) {
        return acc + (item.price * 84 * 0.1 * item.qty);
      }
      return acc;
    }, 0);
  };

  const savings = calculateSavings();
  const subtotal = total + savings;
  const shipping = total > 2000 ? 0 : 99;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert("Order placed successfully!");
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-5">
          <div className="mb-4">
            <i className="bi bi-cart-x" style={{ fontSize: "3rem", color: "#6c757d" }}></i>
          </div>
          <h4 className="text-muted">Your cart is empty</h4>
          <p className="text-muted">Start shopping to add items to your cart</p>

          <Link to="/" className="btn btn-primary mt-3">Continue Shopping</Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-header bg-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Cart Items ({cart.length})</h5>
                <button 
                  className="btn btn-outline-danger btn-sm"
                  onClick={clearCart}
                >
                  <i className="bi bi-trash me-1"></i> Clear Cart
                </button>
              </div>
              <div className="card-body p-0">
                {cart.map((item) => (
                  <div key={item.id} className="d-flex align-items-center p-3 border-bottom">
                    <div className="flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="rounded"
                        style={{ width: "90px", height: "90px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">{item.title}</h6>
                      <p className="text-muted mb-0 small" style={{ maxWidth: "90%", lineHeight: "1.2" }}>
                        {item.description.substring(0, 60)}...
                      </p>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <p className="fw-bold mb-2">₹{(item.price * 84 * item.qty).toLocaleString('en-IN')}</p>
                      
                      <div className="d-flex align-items-center mb-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, item.qty - 1)}
                          disabled={item.qty <= 1}
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        <span className="mx-2">{item.qty}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => updateQuantity(item.id, item.qty + 1)}
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="bi bi-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="card">
              <div className="card-header bg-white">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                
                {savings > 0 && (
                  <div className="d-flex justify-content-between mb-2 text-success">
                    <span>Discount:</span>
                    <span>-₹{savings.toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Tax:</span>
                  <span>₹{(total * 0.18).toLocaleString('en-IN')}</span>
                </div>
                
                <hr />
                
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total:</strong>
                  <strong>₹{(total + shipping + total * 0.18).toLocaleString('en-IN')}</strong>
                </div>
                
                <button 
                  className="btn btn-primary w-100 py-2"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Processing...
                    </>
                  ) : (
                    <>Proceed to Checkout</>
                  )}
                </button>
                
                <div className="mt-3 text-center">
                  <small className="text-muted">
                    <i className="bi bi-lock-fill me-1"></i> Your payment is secure and encrypted
                  </small>
                </div>
              </div>
            </div>
            {/*
            <div className="card mt-3">
              <div className="card-body">
                <h6 className="mb-3">We Accept</h6>
                <div className="d-flex justify-content-between">
                  <i className="bi bi-credit-card" style={{ fontSize: "2rem" }}></i>
                  <i className="bi bi-paypal" style={{ fontSize: "2rem", color: "#003087" }}></i>
                  <i className="bi bi-currency-bitcoin" style={{ fontSize: "2rem", color: "#F7931A" }}></i>
                  <i className="bi bi-wallet2" style={{ fontSize: "2rem" }}></i>
                </div>
              </div>
            </div>
            */}
            <div className="card mt-3">
              <div className="card-body">
                <h6 className="mb-3">Address</h6>
                <div className="d-flex justify-content-between">
                 <button type="button" >Add Address</button>
                </div>
              </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;