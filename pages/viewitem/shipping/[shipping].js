import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { CountContext } from "../../../Component/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { toast } from "react-toastify";
import axios from 'axios';

const shipping = ({ products }) => {
    const {name}=products
    const [count,setCount]=useContext(CountContext)
    const [modals,setModals]=useState(true)
    const subtotal=count*products.resaleprice
    const Deliveryfee=5
    const total=subtotal+Deliveryfee
    const handleSubmit=(e)=>{
        e.preventDefault();
         const form=e.target;
         const name = form.username.value;
         const mobile = form.mobile.value;
         const Address = form.Address.value;
         const city = form.city.value;
        console.log(name,mobile,Address,city);
        const address = {
            name,
            mobile,
            Address,
            city,
          };
      
          axios.post("http://localhost:5000/address", address)
            .then((res) => {
              if (res.status === 200) {
                toast.success("Add Address submit Succesfully");
                form.reset()
              }
            })
            .catch((error) => toast.error(error.message));
    }
    const handleOrder=()=>{
        const order = {
            qty:count,
            pdname:name,
            total,
          };
          axios.post("http://localhost:5000/order", order)
          .then((res) => {
            if (res.status === 200) {
              toast.success("Your Product Buy Succesfully ");
            }
          })
          .catch((error) => toast.error(error.message));
    }
    const handlecheckbox=()=>{
        setModals(false)
        console.log('working');
    }
    const handleAddress=()=>{
        setModals(true)
    }
    return (
        <div className="p-16 lg:flex justify-between ">
            <div className="adddelivery">
                 <div className="modals">
                    {/* The button to open modal */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />

                    <a href="#my-modal-2" onClick={handleAddress} className="btn w-52">Add Address</a>
                   {
                     modals &&  <div className="modal" id="my-modal-2">
                     <div className="modal-box relative">
                         <label onClick={handlecheckbox} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                         <form action="" onSubmit={handleSubmit}>
                             <div>
                             <label htmlFor="" className="mt-2">Full Name</label><br></br>
                             <input type="text" name="username" placeholder="Type here" className="mt-2 input input-bordered w-full max-w-xs" />
                             </div>
                             <div>
                             <label htmlFor="" className="mt-2">Mobile</label><br></br>
                             <input type="text" name="mobile" placeholder="Mobile" className="mt-2 input input-bordered w-full max-w-xs" />
                             </div>
                             <div>
                             <label htmlFor="" className="mt-2">Address</label><br></br>
                             <input type="text" name="Address" placeholder="Address" className="mt-2 input input-bordered w-full max-w-xs" />
                             </div>
                             <div>
                             <label htmlFor="" className="mt-2">City</label><br></br>
                             <input type="text" name="city" placeholder="City" className="mt-2 input input-bordered w-full max-w-xs" />
                             </div>
                             <div className="modal-action">
                             <input className="btn text-slate-500" type="submit" name="" id="" value='Submit' />
                         </div>
                         </form>
                         
                     </div>
                 </div>
                   }
                </div>
                
                <div className="pd-deatils flex gap-3 rounded-md bg-slate-200 p-2 mt-4 items-center">
                <Image src={products.img} width='50' height='50' alt='productimage'></Image>
                <h3 className='text-bold text-base'>{products.name}</h3>
                <h3 className='text-bold text-base'>Qty {count}</h3>
                <h3 className='text-bold text-base'>$ {subtotal}</h3>
       
                </div>
                <div className="vaoucher mt-4 flex  justify-between border rounded-md p-2">
                    <div className="flex gap-2">
                    <FontAwesomeIcon icon={faMoneyBill} />
                     <h6 className="text-xs">Store Voucher</h6>
                    </div>
                    <div className="flex gap-2">
                        <h5 className="text-xs">Get Voucher</h5>
                        <FontAwesomeIcon icon={faGreaterThan} />
                    </div>
                </div>
            </div>
            <div className="order-summary rounded-md bg-slate-200 p-8">
                <h2 className="font-bold text-2xl text-[#DB5C00]">Orders Summary</h2>
                <div className="flex gap-7 mt-4">
                    <div className="">
                        <h2>Subtotal</h2>
                        <h2>Quantity</h2>
                        <h2>Delivery Fee</h2>
                        <h2>Total</h2>
                    </div>
                    <div>
                    <h2>{subtotal}</h2>
                        <h2>{count}</h2>
                        <h2>${Deliveryfee}</h2>
                        <h2>${total}</h2>
                    </div>
                </div>
                <Link href='/payment' ><button onClick={handleOrder} className="text-bold text-base hover:bg-[#FF5C00] btn mt-4">Procced to Checkout</button></Link>

            </div>
        </div>
    );
};
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/shopping/${params?.shipping}`)
    const singleItem = await res.json()

    return {
        props: {
            products: singleItem
        }
    }
}
export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/shopping')
    const data = await res.json()
    const paths = data.map((item) => {
        return {
            params: {
                shipping: `${item._id}`
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}


export default shipping;
