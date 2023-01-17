import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { CountContext } from '../../Component/Context';

const viewItem = ({product}) => {
   let [displayImage,setDisplayImage]=useState()
   let [image,setImage]=useState([])
    const [count,setCount]=useContext(CountContext)
    console.log('count',count);
    const router = useRouter()
    useEffect(()=>{
    setImage(product.images)
    setDisplayImage(product.img)
    },[])
    let onclickhandler=(src)=>{
         setDisplayImage(src)
    }
   const handleIncrease=()=>{
    setCount(prev=>prev+1)
   }
   const handledecrease=()=>{
    if(count>1){
        setCount(prev=>prev-1)
    }
 
   }
    return (
        <div>
            <div className="product-image lg:flex gap-5">
            <div className="image-area px-16 mt-8">
            <Image src={displayImage} width='300' height='300' alt='productimage'></Image>

            <div className="className  flex items-center lg:ml-6 "> 
            {
             image.map((ele,i)=><Image className=' border p-2' src={ele} onMouseOver={()=>onclickhandler(ele)} width='50' height='50' alt='productimage'></Image>
            )  
            }
            </div>
            </div>
            <div className="image-deatils mt-16 ml-8 lg:ml-8">
             <h3 className='text-bold text-2xl'>{product.name}</h3>
             <h3 className='text-bold text-2xl'>Price: ${product.resaleprice}</h3>
             <h3 className='text-1xl mt-2'>category: {product.category}</h3>
             <h3 className='text-xs mt-2 '>{product.description}</h3>
             <div className="count w-32 flex mt-8">
                <button className='btn' onClick={handleIncrease}>+</button>
                <input className='border w-12 rounded-md text-center' type="text" value={count} />
                <button className='btn' onClick={handledecrease}>-</button>
             </div>
             <div className='flex gap-3'>
             <Link href={`shipping/${product._id}`} ><button  className='hover:bg-[#FF5C00] text-base px-4 py-1 rounded-lg bg-[#444444] mt-4 text-white'> Buy Now</button></Link>
             <button  className='hover:bg-[#FF5C00] text-base px-4 py-1 rounded-lg bg-[#444444] mt-4 text-white'> ADD CART</button>
             </div>
            </div>
            </div>
        </div>
    );
};
export const getStaticProps =async(context)=>{
    const {params}=context;

    
    const res=await fetch(`http://localhost:5000/shopping/${params?.viewitem}`)
    const singleItem= await res.json()

    return{
        props:{
            product:singleItem
        }
    }
}
export const getStaticPaths =async()=>{
     const res=await fetch('http://localhost:5000/shopping')
     const data=await res.json()
     const paths=data.map((item)=>{
     return{
        params:{
            viewitem:`${item._id}`
        }
     }
    })
    return{
        paths,
        fallback: false,
    }
}
export default viewItem;

