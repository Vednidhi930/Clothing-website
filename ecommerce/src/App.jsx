import "./App.css";
import AllProducts from "./Components/AllProducts";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Home from "./Components/Home";
import MenCategory from "./Components/MenCategory";
import MenSection from "./Components/MenSection";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from "./Components/Women";
import SingeProduct from "./Components/SingeProduct";
import Cart from "./Components/Cart";
import EmptyCart from "./Components/EmptyCart";
import { Myprovider } from "./Components/Context/ProductContext";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Slide, ToastContainer } from "react-toastify";
import Singlepage from "./Components/Singlepage";

function App() {

  const{cartproduct,isAuthenticate}=Myprovider();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllProduct" element={<AllProducts />} />
          <Route path="/MenSection" element={<MenSection />} />
          <Route path="/WomenSection" element={<Women/>} />
          <Route path="/SingleProduct/:id" element={<Singlepage/>} />
          <Route path="/Cart" element={cartproduct.length===0 ? <EmptyCart/>:<Cart/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
        <Footer />
        <ToastContainer 
        position="top-center" 
        autoClose={1000}
        transition: Slide
        theme="dark"
        
        />
      </BrowserRouter>
    </>
  );
}

export default App;
