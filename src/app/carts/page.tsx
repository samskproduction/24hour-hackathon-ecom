"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { Products } from '../../../data/products';
import Link from 'next/link';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(Products);

  const deleteProduct = (productId: number) => {
    setCartProducts(cartProducts.filter((product) => product.id !== productId));
  };

  const total = cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="">
      <div className=" flex flex-col  mx-10  ">
        <h1 className='p-5 text-2xl'>Your Shopping Cart</h1>
        <div className=" w-full   rounded ">
          <div className="sm:flex  hidden h-14 bg-[#F9F1E7] items-center px-10 justify-between mb-4">
            <p className="font-semibold">Product</p>
            <p className="font-semibold ml-20 ">Quantity</p>
            <p className="font-semibold ">Total</p>
          </div>
          
          {cartProducts.map((item, index) => (index <= 3 &&
            <div key={index} className="flex  items-center mb-4  bg-white rounded justify-start">
              <div className="sm:flex hidden flex-wrap items-center ">
              </div>
                <Image src={item.imageSrc} alt={item.name} className="w-24 h-24 object-cover mr-4" />
              <div className='sm:flex  justify-between w-full'>
                <div className=''>
                <p>{item.name}</p>
                {/* <p className=' line-clamp-1'>{item.description}</p> */}
                <p className=''>${item.price}</p>
                </div>

                <div className="border py-1 w-20  sm:py-3 sm:w-32 flex justify-around items-center border-gray-300 rounded-md">
              <button
                className="text-2xl font-bold"
              >
                -
              </button>
              <span className="text-lg">{item.quantity}</span>
              <button
                className="text-2xl font-bold"
              >
                +
              </button>
            </div> 
            <div className='sm:flex hidden items-center gap-4'>           
             <p className=" mb-2 md:mb-0">Rs. {(item.price * item.quantity).toFixed(2)}</p>
              
        <button onClick={() => deleteProduct(item.id)} className="text-red-500 hover:text-red-700"><AiFillDelete /></button>
        </div> 
              </div>
            </div>
          ))}
        </div>
        <hr className='my-10'/>
        <div className="flex justify-center sm:justify-end items-center">

        <div className=" sm:h-[300px]  h-[200px] w-96 ">
            <div className='flex flex-wrap items-center justify-end '>
                <div className='flex gap-5 my-5'>
          <h2 className="text-xl text-gray-500 text-center ">Subtotal</h2>
          <p className='text-black'>$ {total.toFixed(2)}</p>
          </div>
          <p className='text-gray-500'>Taxes and shipping are calculated at checkout</p>
          <Link href="/checkout" className='flex justify-center'>
          
          <button className=" block px-28 py-2 border  bg-[#2a254b] text-white  mt-4 hover:bg-gray-500 hover:text-[#2a254b] transition-colors">
        Go To Checkout
            </button>
          </Link>
          </div>
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;