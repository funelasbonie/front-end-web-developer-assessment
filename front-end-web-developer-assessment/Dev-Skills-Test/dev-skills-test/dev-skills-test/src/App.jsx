import { useState } from "react";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  return (
    <>
      <Header cartItems={cartItems} wishlistItems={wishlistItems} />
      <ProductPage 
        cartItems={cartItems} 
        setCartItems={setCartItems}
        wishlistItems={wishlistItems}
        setWishlistItems={setWishlistItems}
      />
      <Footer />
    </>
  );
}
