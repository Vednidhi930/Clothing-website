import React from 'react'
import { Myprovider } from './Context/ProductContext'

const AvailableProducts = () => {
    const{allproduct}=Myprovider();
  return (
    <>
       <div className='w-screen  p-4'>
            <h1 className={`text-4xl text-center ${allproduct.length<=4?"text-red-500":"text-green-500"}`}>{allproduct.length===0 ? "No Products Available":allproduct.length + " Products Available"} </h1>
       </div>
    </>
  )
}

export default AvailableProducts
