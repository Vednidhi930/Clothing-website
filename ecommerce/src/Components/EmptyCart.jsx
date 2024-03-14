import React from "react";
import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className="w-screen  flex flex-col gap-5 justify-center p-10 items-center">
        <BsCart3 className="" style={{ fontSize: "15rem" }} />
        <h1 className="text-4xl">Cart is Empty</h1>
        <button className="w-28 h-10 bg-black text-white rounded-full">
          
        <NavLink to="/AllProduct">Shop Now</NavLink>  
          
          </button>
      </div>
    </>
  );
};

export default EmptyCart;
