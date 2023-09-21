import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./modules/home/Home";
import Footer from "./components/footer/Footer";
import Product from "./modules/singleProduct/SingleProduct";
import AllProduct from "./modules/allProduct/AllProduct";
import CategoryProduct from "./modules/categoryProduct/CategoryProduct";
import Cart from "./modules/cart/Cart";
import { useEffect } from "react";
import { setProducts } from "./reducer/productSlice";
import { useDispatch } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Address from "./components/address/Address";

// Initialize Stripe with your publishable key
// const stripePromise = loadStripe(
//   "pk_test_51NrGHOSGHNKq1flkMus3L1qM792vsQJYmmu72yFZCxdOo9yyE8d7mRFopV8ncnhqPE6c5Jqymjg2Q06k4fZSIbzT00GUzSpGOI"
// );
function App() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=12");
    const data = await response.json();
    dispatch(setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/" element={<AllProduct />} />
        <Route path="/categories/:name" element={<CategoryProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<>404</>} />
      </Routes>
      {/* <Elements stripe={stripePromise}>
        <Address />
      </Elements> */}
      <Footer />
    </div>
  );
}

export default App;
