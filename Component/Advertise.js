
import img1 from '../public/banner-14.jpg'
import img2 from '../public/banner-13 (1).jpg'
import img3 from '../public/banner-15.jpg'
import Image from 'next/image';
const Advertise = () => {
    return (
        <>
        
        <div className='ad-wrappers px-8 mt-12 lg:grid grid-cols-3 gap-5'>
           
            <div className="mb-4">
                
            <Image src={img1}  width='100%' height='100%' alt='shop'/>
            </div>
            <div className="mb-4">
            <Image src={img2}  width='100%' height='100%' alt='shop'/>
            </div>
            <div className="mb-4">
            <Image src={img3}  width='100%' height='100%' alt='shop'/>
            </div>
        </div>
        </>
    );
};

export default Advertise;