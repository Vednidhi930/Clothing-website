import React from 'react'
import { Myprovider } from './Context/ProductContext'

const AvailableProductWomen = () => {
    const{womenproduct}=Myprovider();
  return (
    <>
       <div className='w-screen  p-4'>
            <h1 className={`text-4xl text-center ${womenproduct.length<=4?"text-red-500":"text-green-500"}`}>{womenproduct.length===0 ? "No Products Available":womenproduct.length + " Products Available"}</h1>
       </div>
    </>
  )
}

export default AvailableProductWomen
