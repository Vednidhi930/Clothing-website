import React from 'react'
import { Myprovider } from './Context/ProductContext'

const AvailableProductMen = () => {
    const{menproduct}=Myprovider();
  return (
    <>
        <div className='w-screen  p-4'>
            <h1 className={`text-4xl text-center ${menproduct.length<=4?"text-red-500":"text-green-500"}`}>{menproduct.length===0 ? "No Products Available":menproduct.length + " Products Available"}</h1>
       </div>
    </>
  )
}

export default AvailableProductMen
