import React from "react";
import Home from "../pages/home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import Categories from "../pages/Categories";
import AboutUs from "../pages/AboutUs";
import Favorites from "../pages/Favorites";
import ContactUs from "../pages/ContactUs";
import ProtectedRoute from "./ProtectedRoute";
import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import { Users } from "../admin/Users";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="collection" element={<Categories />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="/:id" element={<ProductDetails />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="cart" element={<Cart />} />

      <Route path = "/*" element={<ProtectedRoute/>}>

        <Route path="checkout" element={<Checkout />}/>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProducts/>} />
        <Route path="dashboard/add-products" element={<AddProducts/>} />
        <Route path="dashboard/users" element={<Users/>} />
      </Route>

      
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="contactus" element={<ContactUs />} />
    </Routes>
  );
};

export default Routers;
