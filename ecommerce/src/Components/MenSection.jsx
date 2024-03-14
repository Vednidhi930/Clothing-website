import React from "react";
import { Myprovider } from "./Context/ProductContext";
import MenCategory from "./MenCategory";
import AvailableProducts from "./AvailableProducts";
import AvailableProductMen from "./AvailableProductMen";

const MenSection = () => {
  const { allproduct, menproduct, isloading } = Myprovider();
  // console.log(allproduct);
  console.log(menproduct);
  return (
    <>
    <AvailableProductMen/>
      {isloading ? (
        <div className="flex justify-center z-0">
          <h1 className="text-3xl text-red-500">Loading Data...</h1>
        </div>
      ) : (
        <div className="w-screen border-4 p-5 flex gap-5 flex-wrap justify-center">
          {menproduct.map((curr, id) => (
            <MenCategory key={id} {...curr} />
          ))}
        </div>
      )}
    </>
  );
};

export default MenSection;
