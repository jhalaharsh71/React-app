import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        localStorage.removeItem("shoppingCart");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) {
      removeFromCart(id);
      return;
    }
    
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + (item.price * 84 * item.qty), 0);

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const isInCart = (id) => cart.some(item => item.id === id);

  const getProductQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    return item ? item.qty : 0;
  };

  return (
    <CartContext.Provider
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity,
        clearCart, 
        total,
        cartCount,
        isInCart,
        getProductQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}