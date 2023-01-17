import React, { useContext, useEffect, useState } from 'react';
import AllProducts from '../Component/AllProducts';
import { CartContext } from '../Component/Context';

const products = ({data}) => {
   const uniqueArray = data.filter((v,i,a)=>a.findLastIndex(v2=>(v2.category === v.category))===i)
   const [allproduct,setProducts]=useState(data)
   const [active,setActive]=useState('all')
   const [value, setValue] = useState(data);
   const [select,selected]=useState([])
   const handleFilter=(item)=>{
    const filter=data.filter(ele=>ele.category==item)
    setProducts(filter)
    setActive(item)
   }
   const handleAll=(item)=>{
    if(item=='all'){
        setProducts(data)
        setActive(item)

    }
   }
   const handlesort=(e)=>{
    if(e.target.value=='Price Highest'){
    const numAscending = allproduct.sort((a, b) => b.resaleprice-a.resaleprice);
    setProducts(numAscending)
    console.log('numasecending',numAscending);
    }else if(e.target.value=='Price Lowest'){
        const numDescending = allproduct.sort((a, b) => a.resaleprice-b.resaleprice);
    setProducts(numDescending)
    console.log('acending',numDescending);

    }else if(e.target.value=='A-Z'){
        const strAscending = data.sort((a, b) =>
        a.name > b.name ? 1 : -1,
      );
      setProducts(strAscending)
        console.log('z-qa',strAscending);
    }
   }
//Search implement
 const handleSearch=(searchvalue)=>{
   const item=data.filter(ele=>ele.name.toLowerCase().startsWith(searchvalue.toLowerCase())) 
  setProducts(item)
 }

//  clear filter
const handleallfilter=()=>{
    setProducts(data)
    setActive('all')
}
//range apply
// Changing State when volume increases/decreases
// const rangeSelector = (event, newValue) => {
//   setValue(newValue);
//   console.log(newValue)
// };
//  useEffect(()=>{
//     handlesort()
//  },[allproduct])
 //cart context
 const [cart, setCart] =useContext(CartContext)
 console.log('cart',cart);
 const handleBuy=(id,quantity,pd)=>{
   const itemAdd=cart.find((ele)=>ele._id===pd._id)
   if(itemAdd){
    const updateCart=cart.map((currenEle)=>{
     if(currenEle._id==pd._id)return{
        ...currenEle,
        quantity:currenEle.quantity+quantity
     }
    })
    setCart(updateCart)
   }else{
    pd.quantity = quantity;
    setCart([...cart, { ...pd }]);
   }
   
 }
    return (
        <>
            <div className="pd-header lg:grid grid-cols-3 gap-11 px-16 mt-6">
                <div>
                    <input onChange={(e)=>handleSearch(e.target.value)} type="text" placeholder="Search Products" className="input input-bordered input-secondary w-full max-w-xs" />
                </div>
                <div>
                    <h4>{allproduct.length} Products Available</h4>
                </div>
                <div>
                    <select value={selected} onChange={(e)=>handlesort(e)} className="select w-full max-w-xs border">
                        <option>Price Highest</option>
                        <option>Price Lowest</option>
                        <option>A-Z</option>
                       
                    </select>
                </div>
            </div>
            <div className="lg:grid grid-cols-6 gap-2">
                <div className='col-span-2'>
                <div className='pd-area mt-12 px-16'>
              <div className="category-area">
              <h2 className='font-semibold'>Category</h2>
              
               <div className='mt-6'>
               <li className= {active==='all'?`text-[#FF5500]  cursor-pointer`:`` } onClick={()=>handleAll('all')}>All</li>
                {
                    uniqueArray.map(ct=><div key={ct._id}> <li  className={`list-item ${active == ct.category && "active"}`} onClick={()=>handleFilter(ct.category)}> {ct.category} </li> </div>)
                }
               </div>
              </div>

            </div>
            <div className="price-area px-16 mt-4  font-semibold">
                <h2>Price</h2>
                <h4 className='mt-2'> $300</h4>
                
            <input  
           type="range" name="" id="" className='bg-[#FF5500]'/>
            </div>
            <div className="clearfilters px-16">
                <button onClick={handleallfilter} className='bg-[#FF5500] px-2 text-white rounded-md mt-4'>Clear Filters</button>
            </div>
                </div>
                <div className="main-wrapper px-8 col-span-4 mt-12">
                <div className='lg:grid grid-cols-3 gap-5 mb-4'>
                  {
                    allproduct.map(pd=><AllProducts handleBuy={handleBuy} key={pd._id} pd={pd}></AllProducts>)
                  }
                </div>
            </div>

            </div>

           
        </>
    );
};
export async function getServerSideProps() {
  
    const res = await fetch(`http://localhost:5000/shopping`)
    const data = await res.json()

    return { props: { data } }
  }
export default products;