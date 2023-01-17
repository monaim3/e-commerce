import Image from 'next/image';
import React from 'react';
import welcomeImg from '../public/banner-16.jpg'
const Welcome = () => {
    return (
        <div className='mt-8 px-8 z-10'>
            <Image  src={welcomeImg} width='1000' height='150' alt='products'></Image>
        </div>
    );
};

export default Welcome;