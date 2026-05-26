<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home_main from "./Components/Home/Home_main";
import Products_main from "./Components/Products/products_main";
import About_main from "./Components/About/About_main";
import Main_contact from "./Components/contact/Main_contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home_main />} />
          <Route path="/products" element={<Products_main/>} />
          <Route path="/about" element={<About_main/>} />
          <Route path="/contact" element={<Main_contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
=======
import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
>>>>>>> 6378038d426e6a419966efc9527a6f09bc73614b
}
