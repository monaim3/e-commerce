
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import item1 from '../public/item-1.jpg'
import item2 from '../public/item-2.jpg'
import item3 from '../public/item-3.jpg'
import Image from "next/image";
const Banner = () => {
    return (
        <>
              <Carousel  >
                <div>
                    <Image src={item1}  width='100%' height='100%' alt='banner'/>
                  
                </div>
                <div>
                <Image src={item2}  width='100%' height='100%' alt='banner'/>
              
                </div>
                <div>
                <Image src={item3}  width='100%' height='100%' alt='banner'/>
                  
                </div>
            </Carousel>
        </>
    );
};

export default Banner;