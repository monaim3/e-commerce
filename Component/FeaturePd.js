import { useEffect, useState } from "react";
import FeatureDeatils from "./FeatureDeatils";
import sidebanner from '../public/banner-tab-1.jpg'
import Image from "next/image";
import Link from "next/link";
const FeaturePd = () => {
    const [products,setProducts]=useState([])
   useEffect(()=>{
       fetch('http://localhost:5000/shopping') 
       .then(res=>res.json())
       .then(data=>setProducts(data.slice(0,3)))
   },[])
    return (
        <>
         <div className="mt-6 ">
         <h2 className="text-center font-semibold text-2xl">Feature Products</h2>
          <hr  className="w-32 h-1 mx-auto bg-[#FF5500] mt-1"/>
          <div className="lg:grid grid-cols-6 gap-3 overflow-hidden">
          <div className=" products-feature lg:grid grid-cols-3 px-8 gap-5 mt-6  col-span-5">
            {
                products.map(pd=><FeatureDeatils key={pd._id} product={pd}> </FeatureDeatils>)
            }
          </div>
         
       
         <div className='mt-6 mr-2 '>
        <Image className="" src={sidebanner} width='600' height='600' alt='products'></Image>
        </div>
        </div>
       
          </div>
          <div className="bg-[#FF5C00] mt-12 px-4 py-2 w-32 mx-auto  text-white rounded-md"><Link href='/products'>All Products</Link></div>
        </>
    );
};

export default FeaturePd;

