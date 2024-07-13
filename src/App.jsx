import React from 'react';
import LandingPage from './Components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Components/Navbar';
import ProductListings from './Components/ProductListings';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import OrderHistory from './pages/OrderHistory';
import AdminPanel from './pages/AdminPanel';
import ManageProducts from './pages/ManageProducts';
import ManageUsers from './pages/ManageUsers';
import AboutUs from './pages/AboutUs';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Toaster/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListings/>} />
        <Route path="/productDetail" element={<ProductDetails/>} />
        <Route path="/shoppingCart" element={<ShoppingCart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/orderhistroy" element={<OrderHistory/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/admin" element={<AdminPanel/>} />
        <Route path="/admin/manage-products" element={<ManageProducts/>} />
        <Route path="/admin/manage-users" element={<ManageUsers/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
