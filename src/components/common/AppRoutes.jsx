import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import Menu from "../../pages/Menu";
import Allergy from "../../pages/Allergy";
import Register from "../../pages/Register";
import Service from "../../pages/Service";
import PageNotFound from "../../pages/PageNotFound";
import ProductDetails from "../../pages/ProductDetails";
import CardPage from "../../pages/CardPage";
import Payment from "../../pages/Payment";
import Success from "../../pages/Success";
import Failure from "../../pages/Failure";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/allergy" element={<Allergy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/productDetails" element={<ProductDetails/>} />
        <Route path="/cardPages" element={<CardPage/>} />
        <Route path="/payments" element={<Payment/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/failure" element={<Failure/>} />




      </Routes>
    </div>
  );
};

export default AppRoutes;
