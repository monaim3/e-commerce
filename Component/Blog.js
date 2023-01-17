import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image';
import React from 'react';
import blog1 from '../public/blo1.jpg'
import blog2 from '../public/blo3.jpg'
import blog3 from '../public/blo4.jpg'
import blog4 from '../public/blo5.jpg'
const Blog = () => {
    return (
        <div className='lg:grid grid-cols-4 gap-5 px-8 mt-12'>
            <div className=''>
            <Image  src={blog1} width='300' height='300' alt='blog'></Image>
             <div className=''>
             <FontAwesomeIcon icon={faCalendarCheck} />
                  <span className='text-xs'> Posted: 2017-06-19</span>
                 </div>
                 <h2 className='text-xs mt-2'>Moving from Ticket System to Forum</h2>
            </div>
            <div className=''>
            <Image  src={blog2} width='300' height='300' alt='blog'></Image>
             <div className=''>
             <FontAwesomeIcon icon={faCalendarCheck} />
                  <span className='text-xs'> Posted: 2017-06-19</span>
                 </div>
                 <h2 className='text-xs mt-2'>Customer Support Notice for Holiday</h2>
            </div>
            <div className=''>
            <Image  src={blog3} width='300' height='300' alt='blog'></Image>
             <div className=''>
             <FontAwesomeIcon icon={faCalendarCheck} />
                  <span className='text-xs'> Posted: 2017-06-19</span>
                 </div>
                 <h2 className='text-xs mt-2'>Magento Community Edition Released</h2>
            </div>
            <div className=''>
            <Image  src={blog4} width='300' height='300' alt='blog'></Image>
             <div className=''>
             <FontAwesomeIcon icon={faCalendarCheck} />
                  <span className='text-xs'> Posted: 2017-06-19</span>
                 </div>
                 <h2 className='text-xs mt-2'>Magento Community Edition Released</h2>
            </div>
        </div>
    );
};

export default Blog;