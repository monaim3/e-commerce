
import React from 'react';

import Image from "next/image";
import Link from 'next/link';
const FeatureDeatils = ({product}) => {
    const {_id,name,resaleprice,originalPrice,yearofUsed,category,description,img}=product
    return (
        <>
        <div className='mb-4'>
            <div className='relative  bg-no-repeat bg-cover max-w-xs'>
                <Image className="" src={img} width='300' height='300' alt='products'></Image>
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out bg-indigo-700"></div>
            </div>
          <h3 className='font-semibold text-[#444444]'>{name}</h3>
          <p className='mt-2 text-xs'> {description}</p>
          <h2 className='text-[#EC6E61] font-bold'>$ {resaleprice}</h2>
         <Link href={`viewitem/${_id}`}><button className='hover:bg-[#FF5C00] text-base px-4 py-1 rounded-lg bg-[#444444] mt-4 text-white'> ADD TO CART</button></Link>
       
        </div>
        
        </>
    );
};

export default FeatureDeatils;