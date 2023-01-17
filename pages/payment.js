import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import success from '../public/success.gif'
const payment = () => {
    // const router = useRouter()
    // router.push(href)

    return (
        <div className="mt-6 p-16">
           <Image src={success} width='300' height='300' alt="success"></Image>
          <div className="mt-12 ml-16">
          <Link href='/products' className="mt-12"> <button className="btn">More Shop</button> </Link>

          </div>
        </div>
    );
};

export default payment;