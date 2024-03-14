import React, { useEffect } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Myprovider } from "./Context/ProductContext";
import { useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";

{
  /* <p className='text-xl'>our perfect pack for everyday use and walks in the forest.<br/> Stash your laptop (up to 15 inches) in the padded sleeve,<br/> your everyday....</p>
<div className='flex items-center gap-3'>
  <FaMinus className='text-3xl'/>
  <p className='text-3xl font-bold capitalize'>0</p>
  <FaPlus className='text-3xl'/>
</div> */
}

const url = "https://fakestoreapi.com/products";

const SingeProduct = () => {
  const {
    singlepage,
    singleproduct,
    handlecart,
    handleplus,
    counter,
    handleminus,
  } = Myprovider();
  const { image, price, description, title } = singleproduct;
  const cart=useNavigate();
  //console.log(rating.rate);

  const { id } = useParams();
  //console.log(id);
console.log(counter)

  useEffect(() => {
    singlepage(`${url}/${id}`);
  }, []);

  return (
    <>
      <section className="flex w-screen  items-center justify-center lg:gap-14 lg:flex-nowrap sm:flex-wrap">
        <div className="left-part lg:w-3/12 sm:w-screen">
          <img src={image} className="w-screen" />
        </div>

        <div className="right-part lg:w-3/5 sm:w-screen flex flex-col  gap-5 p-7 border-2 border-slate-300">
          <h1 className="text-3xl">{title}</h1>
          <h1 className="text-4xl text-blue-600">${price}</h1>
          <div className="bg-blue-500 text-white text-2xl p-1 rounded-full justify-center flex items-center gap-2 w-20">
            {/* {rating.rate} */}
            <FaStar className="text-xl" />
          </div>
          <p className="text-xl">Free Delivery</p>

          <h1 className="text-3xl">Select Quantity</h1>
          <div className="flex items-center gap-3">
            <CiCircleMinus className="text-5xl" onClick={handleminus} />
            <p className="text-3xl">{counter}</p>
            <BsPlusCircle className="text-4xl" onClick={handleplus} />
          </div>

          <h2 className="text-3xl">Product Detail</h2>
          <p className="text-xl">
            Name: Hope Large Two-Tone SaffionoLeather Satchel
          </p>
          <p className="text-xl">Category: Men's Clothing</p>
          <p className="text-xl">{description}</p>

          <button
            className="w-full h-14 bg-blue-500 text-white ms-2 rounded-full"
             onClick={handlecart}
          >
            <NavLink to="/Cart">
              Add to Cart
            </NavLink>
          </button>
        </div>
      </section>
    </>
  );
};

export default SingeProduct;
