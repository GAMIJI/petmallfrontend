import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Pages/Home";
import Preloader from "./components/Preloader";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ProductDetails from "./components/Pages/ProductDetails";
import ProductList from "./components/Pages/ProductList";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import StoreList from "./components/Pages/StoreList";
import ShopProductList from "./components/Pages/ShopProductList";
import DoctorsDetails from "./components/Pages/DoctorsDetails";
import DoctorList from "./components/Pages/DoctorList";
import BlogDetails from "./components/Pages/BlogDetails";
import BlogsList from "./components/Pages/BlogsList";
import AnimalList from "./components/Pages/AnimalList";
import Profile from "./components/Pages/Profile";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import VerifyOtp from "./components/Pages/VerifyOtp";
import DocProfile from "./components/Pages/DocProfile";
import VendorProfile from "./components/Pages/VendorProfile";
import Privacy from "./components/VendorProfile/Privacy";
import MyProducts from "./components/VendorProfile/MyProducts";
import Terms from "./components/VendorProfile/Terms";
import Review from "./components/VendorProfile/Review";
import AboutUs from "./components/VendorProfile/AboutUs";
import CancelOrders from "./components/VendorProfile/CancelOrders";
import CompletedOrders from "./components/VendorProfile/CompletedOrders";
import NewOrders from "./components/VendorProfile/NewOrders";
import AddProduct from "./components/VendorProfile/AddProduct";
import Store from "./components/VendorProfile/Store";
import OrderList from "./components/Pages/OrderList";
import OrderDetails from "./components/Pages/OrderDetails";
import WishList from "./components/Pages/WishList"


const AppLayout = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname === "/register" || location.pathname === "/login";

  return (
    <>
      <Preloader />
       {!isAuthRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/storeList" element={<StoreList />} />
        <Route path="/shopProductList" element={<ShopProductList />} />
        <Route path="/doctorsDetails" element={<DoctorsDetails />} />
        <Route path="/doctorList" element={<DoctorList />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/blogsList" element={<BlogsList />} />
        <Route path="/animalList" element={<AnimalList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyOtp" element={<VerifyOtp />} />
        <Route path="/docProfile" element={<DocProfile />} />
        <Route path="/orderList" element={<OrderList />} />
        <Route path="/order" element={<OrderDetails />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/productDetails" element={<ProductDetails />} />
          
         <Route path="/login" element={<Login />} />
       

        {/* Vendor Routes */}
        <Route path="/vendorProfile" element={<VendorProfile />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/review" element={<Review />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cancelorders" element={<CancelOrders />} />
        <Route path="/completedorders" element={<CompletedOrders />} />
        <Route path="/neworders" element={<NewOrders />} />
        <Route path="/myProducts" element={<MyProducts />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/mystore" element={<Store />} />
      </Routes>

    {!isAuthRoute && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
