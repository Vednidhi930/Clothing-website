import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";
import { Myprovider } from "./Context/ProductContext";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const { cartproduct, cartdelete, handleminus, handleplus , totalprice } =
    Myprovider();

    //console.log(price)

  return (
    <>
      {cartproduct.map((curr) => (
        <div key={curr.id} className="cart w-full flex p-5 gap-4 justify-center items-center flex-col relative">
          <div className=" flex justify-center lg:w-screen sm:w-12/12 p-3">
            <div className="left-part lg:w-40 border-2 border-slate-300 p-3 flex items-center">
              <img src={curr.image} className="w-full" />
            </div>
            <div className="detail-part lg:w-2/5 sm:w-screen flex flex-col  gap-5 p-7 flex-nowrap">
              <h1 className="lg:text-3xl sm:text-xl uppercase ">
                {curr.title}
              </h1>
              <p className="text-2xl text-nowrap">Quantity:{curr.counter}</p>
              <div className="quantity flex items-center justify-between flex-nowrap sm:gap-4">
                <div className="flex items-center gap-5 flex-col justify-center">
                  <p className="lg:text-4xl text-nowrap sm:text-3xl">
                    $ {curr.price * curr.counter}
                  </p>
                </div>

                <div>
                  <MdDeleteOutline
                    className="text-4xl hover:text-red-500"
                    onClick={() => cartdelete(curr.id)}
                  />
                </div>
                <div className="flex items-center gap-2 flex-nowrap">
                  <CiCircleMinus
                    className="lg:text-5xl sm:text-4xl"
                    onClick={()=>handleminus(curr.id)}
                  />
                  <p className="text-3xl">{curr.counter}</p>
                  <BsPlusCircle
                    className="lg:text-4xl sm:text-3xl"
                    onClick={()=>handleplus(curr.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center">
        <div className="w-96 border-2 border-black p-3 flex flex-col gap-3 bg-slate-200">
          <h2 className="text-3xl"> Price Detail </h2>
          <div className="Price  flex justify-between text-xl p-2 border-b-2 border-black">
            <p>Subtotal</p>
            <p>${totalprice}</p>
          </div>

          <div className="Price  flex justify-between text-xl p-2 border-b-2 border-black">
            <p>Discount</p>
            <p>${totalprice/10}</p>
          </div>

          <div className="Price flex justify-between text-xl p-2 border-b-2 border-black">
            <p>Delivery Charges</p>
            <p>${40}</p>
          </div>

          <div className="Price flex justify-between text-xl p-2">
            <p>Total</p>
            <p>{totalprice+totalprice/10+40}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
