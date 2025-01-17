import React from "react";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./components/cart/Cart";
import ProductCard from "./components/product/ProductCard";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import SearchResultPage from "./components/search/SearchResultPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };
  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ProductCard
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route path="/productcard" />
            <Route
              path="/productdetail/:id"
              element={
                <ProductDetail
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/searchresult"
              element={
                <SearchResultPage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
