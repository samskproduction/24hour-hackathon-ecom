import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {  Products } from '../../data/products';


const ProductCard = () => {
  return (
    <div className=" mx-10 my-16">
      <h1 className=" text-3xl md:text-5xl  text-gray-700 my-10">New ceramics</h1>
      <div className="flex  flex-wrap gap-5 justify-around  ">
        {Products.map((product, index) => (index <= 3 &&
          <Link key={index} href={`/singlepage/${product.slug}`} className=''>

            <div className=" w-[250px] sm:w-[250px] md:w-[300px]  lg:w-[300px]  ">
              <div className="relative">
                <Image src={product.imageSrc} alt={product.name} className="w-full h-[350px] object-cover" />
               
              </div>
              <div className="-10">
                <h3 className="text-lg text-gray-700 font-bold mb-1 my-5">{product.name}</h3>
                <p className="text-sm text-gray-700 mb-2">{product.price}</p>
                <div className="flex gap-4">
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/shop">
          <button className="bg-gray-100  text-gray-700 font-bold py-3 px-10 rounded">
New    Collection       </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;