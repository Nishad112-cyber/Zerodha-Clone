import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Homepage from './landing-page/Home/Homepage';
import Signup from './landing-page/Signup/Signup';
import AboutPage from './landing-page/About/AboutPage';
import ProductPage from './landing-page/Products/ProductPage';
import PricingPage from './landing-page/Pricing/PricingPage';
import SupportPage from './landing-page/Support/SupportPage';
import NotFound from './landing-page/NotFound';
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);