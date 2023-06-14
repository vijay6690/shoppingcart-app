import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./features/cart/Cart";
import { fetchAsync } from "./features/cart/cartSlice";
import { Product } from "./features/product/Product";
import SignUp from "./features/SignUp";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LogIn from "./features/LogIn";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsync());
  }, []);
  return (
    <div className="App">
      <div className="col-4" style={{ width: "100px" }}>
        <ToastContainer></ToastContainer>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// http://localhost:8000/products
