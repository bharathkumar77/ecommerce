import React from 'react';
import Navbar from "./components/navbar";
import { Routes, Route } from 'react-router-dom'
import Login from "./components/Login/login"
import Home from "./components/homepage"
import './App.css';
import Products from "./components/Products/products"
import ProductDetails from "./components/ProductDetails/productdetails"
import Cartpage from "./components/cartpage/cartpage"
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} exact />
        {isLoggedIn ?
          <>
            <Route path="/products" element={<Products />} exact />
            <Route path="/cart" element={<Cartpage />} exact />
            <Route path="/product/:id" element={<ProductDetails />} exact />
          </>
          : null}
        <Route path="/" element={<Home />} exact />
      </Routes>
    </div>
  );
}

export default App;
