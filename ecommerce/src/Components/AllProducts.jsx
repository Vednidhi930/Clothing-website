import React from "react";
import { Myprovider } from "./Context/ProductContext";
import MenCategory from "./MenCategory";
import { IoSearchOutline } from "react-icons/io5";
import AvailableProducts from "./AvailableProducts";

const AllProducts = () => {
  const { allproduct, isloading,} = Myprovider();
       //console.log(allproduct.length)
  return (
    <>   
    <AvailableProducts/>
      {isloading ? (
        <div className="flex justify-center z-0 p-5">
          <h1 className="text-3xl text-red-500">Loading Data...</h1>
        </div>
      ) : (
        <div className="w-screen border-4 p-5 flex gap-5 flex-wrap justify-center">
          {allproduct.map((curr, id) => (
           <MenCategory key={id} {...curr} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllProducts;
