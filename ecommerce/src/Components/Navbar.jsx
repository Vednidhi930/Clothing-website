import React, { useState } from "react";
import shopIcon from "./Images/online-shopping.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import "./Global.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Myprovider } from "./Context/ProductContext";
import { auth } from "./Firebase/Firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { FaUserCheck } from "react-icons/fa";

const Navbar = () => {
  const {
    SearchAllProduct,
    cartproduct,
    userprofile,
    isAuthenticate,
    filter: { text },
  } = Myprovider();
  console.log(userprofile);

  const signout = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.warn("Logout Sucesssfully");
        signout("/Login");
      })
      .catch((err) => console.log(err.message));
  };

  console.log(cartproduct.length);

  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="w-full  flex items-center justify-around z-10">
        <div className="nav-left w-1/5">
          <NavLink to="/">
            <div className="imageDetail w-10 flex items-center">
              <img src={shopIcon} alt="shopLogo" />
              <h1 className="lg:text-3xl sm:text-xl text-black">StyleSpot</h1>
            </div>
          </NavLink>
        </div>

        <div className="nav-center w-2/5">
          <div className="w-full category-item">
            <ul className="flex gap-3 justify-center cursor-pointer">
              <li>
                <NavLink to="/" className="text-2xl ">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/AllProduct" className="text-2xl text-nowrap">
                  All Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/MenSection" className="text-2xl">
                  Mens
                </NavLink>
              </li>
              <li>
                <NavLink to="/WomenSection" className="text-2xl">
                  Womens
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-end p-3  flex items-center gap-1">
          <div className="flex items-center gap-1">
            {isAuthenticate ? <FaUserCheck className="text-3xl" /> : null}
            <span className="text-2xl text-slate-500">{userprofile}</span>
          </div>
          <div className="w-full p-2 relative flex items-center">
            <IoSearchOutline className="text-4xl absolute top-auto left-auto p-1" />
            <input
              type="text"
              placeholder="Search"
              className="w-48 h-10 ps-10 text-xl rounded-full outline-none"
              style={{ background: "rgba(236, 240, 241,1.0)" }}
              onChange={SearchAllProduct}
              name="text"
              value={text}
            />
          </div>

          <div className="flex items-center gap-2 shop-three-line-cart-icon-serach-bar-div">
            <NavLink to="/Cart">
              <FaCartShopping className="text-4xl cart-icon" />
            </NavLink>
            <span className="text-3xl relative right-1 bottom-2 count-num">
              {cartproduct.length}
            </span>
            {isAuthenticate ? (
              <button
                className="w-20 h-10 bg-black text-white ms-2 rounded-full login-btn"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <button className="w-20 h-10 bg-black text-white ms-2 rounded-full login-btn">
                <NavLink to="/Signup">Login</NavLink>
              </button>
            )}

            <IoReorderThree
              className="text-5xl three-line-icon"
              onClick={() => setMenu(!menu)}
            />
          </div>
        </div>
      </nav>

      {menu ? (
        <div className="w-60 bg-slate-200 h-screen p-4 absolute top-0 right-0 z-10">
          <ul className="flex flex-col gap-3 justify-center cursor-pointer items-center">
            <li>
              <NavLink
                to="/"
                className="text-2xl hover:text-red-500"
                onClick={() => setMenu(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AllProduct"
                className="text-2xl hover:text-red-500"
                onClick={() => setMenu(false)}
              >
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/MenSection"
                className="text-2xl hover:text-red-500"
                onClick={() => setMenu(false)}
              >
                Mens
              </NavLink>
            </li>
            <li>
              <a
                className="text-2xl hover:text-red-500"
                onClick={() => setMenu(false)}
              >
                Womens
              </a>
            </li>

            <NavLink to="/Cart">
              <FaCartShopping className="text-5xl" />
              <span className="text-3xl relative bottom-16 left-12">
                {cartproduct.length}
              </span>
            </NavLink>
            <button className="w-20 h-10 bg-black text-white ms-2 rounded-full">
              <NavLink to="/Login">Login</NavLink>
            </button>
          </ul>

          <RxCross1
            className="text-4xl font-bold absolute top-0 right-0"
            onClick={() => setMenu(false)}
          />
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
