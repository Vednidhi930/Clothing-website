import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";
import { Myprovider } from "./Context/ProductContext";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
    const{cartproduct,cartdelete,counter,handleminus,handleplus}=Myprovider();

  return (
    <>
       {
        cartproduct.map((curr)=>
        <div className="cart w-full flex p-5 gap-4 justify-center items-center flex-col">
          <div className=" flex justify-center lg:w-12/12 sm:w-8/12">
            <div className="left-part lg:w-2/12 border-2 border-slate-300 p-3 flex items-center">
              <img
                src={curr.image}
                className="w-full"
              />
            </div>
            <div className="detail-part lg:w-2/5 sm:w-screen flex flex-col  gap-5 p-7 flex-nowrap">
              <h1 className="lg:text-3xl sm:text-xl uppercase ">{curr.title}</h1>
              <p className="text-2xl text-nowrap">Quantity:{counter}</p>
              <div className="quantity flex items-center justify-between flex-nowrap sm:gap-4">
                <div className="flex items-center gap-5 flex-col justify-center">
                  <p className="lg:text-4xl text-nowrap sm:text-3xl">$ {curr.price*counter}</p>
                </div>

                <div>
                    <MdDeleteOutline className="text-4xl hover:text-red-500"onClick={()=>cartdelete(curr.id)}/>
                </div>
                <div className="flex items-center gap-2 flex-nowrap">
                  <CiCircleMinus className="lg:text-5xl sm:text-4xl" onClick={handleminus}/>
                  <p className="text-3xl">{counter}</p>
                  <BsPlusCircle className="lg:text-4xl sm:text-3xl" onClick={handleplus}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
       }
    </>
  );
};

export default Cart;
