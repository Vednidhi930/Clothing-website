import React from "react";
import { Myprovider } from "./Context/ProductContext";
import { NavLink } from "react-router-dom";

const MenCategory = ({ price, image, title ,id}) => {
  const { allproduct,isAuthenticate} = Myprovider();
 // console.log(id);
  return (
    <>
    
        <div
          className="w-80  p-8 shadow-lg flex flex-col justify-center gap-3 items-center hover:scale-90 hover:ease-in-out duration-300"
          
        >
         
          <img src={image} />

          <div className="detail flex flex-col items-center gap-2">
            <h1 className="text-2xl text-black font- semibold text-center">
              {title}
            </h1>
            <h1 className="text-2xl text-black font- semibold text-center">
              price:$
              {price}
            </h1>
            <button className="w-28 h-10 bg-blue-500 text-white ms-2 rounded-full">
              <NavLink to={`/SingleProduct/${id}`}>Know More</NavLink>
             
            </button>
          </div>
        </div>
      
    </>
  );
};

export default MenCategory;
