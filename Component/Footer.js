import Image from 'next/image';
import React from 'react';
import footerlogo from '../public/logo-footer-2.png'
import app1 from '../public/app-3.png'
import app2 from '../public/app-4.png'
import Link from 'next/link';
import { faFacebook, faTwitter, faGooglePlusG, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className="bg-[#292A36] py-12 mt-8">
            <div className='lg:grid grid-cols-6 gap-5 px-8 mt-6 gap-x-8'>
                <div className=''>
                    <Image src={footerlogo} width='200' height='200' alt='footerlogo'></Image>
                    <p className='mt-3 text-xs text-[#CCCCCC]'>Lorem ipsum dolor sit amet, consectetur adipisci ng elit, sed do eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...</p>
                    <button className='text-white bg-[#FF5C00] rounded-md p-1 mt-3'>Read More</button>
                    <div className='flex justify-between mt-6'>
                        <Image src={app1} width='100' height='100'></Image>
                        <Image className='ml-4' src={app2} width='100' height='100'></Image>
                    </div>
                </div>
                <div className='text-[#CCCCCC]'>
                    <h3 className=''>OUR SERVICES</h3>
                    <hr className="w-8 h-0.5  bg-[#FF5500] mt-1" />
                    <ul className='list-none mt-4'>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > My Account </Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Track Your Order </Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > WishList </Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Customer Service </Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Return/Exchange </Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Faq </Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Support </Link></li>
                    </ul>
                </div>
                <div className='text-[#CCCCCC]'>
                    <h3 className=''>CATEGORIES</h3>
                    <hr className="w-8 h-0.5  bg-[#FF5500] mt-1" />
                    <ul className='list-none mt-4'>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Industrial parts & Tools </Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Health & Beauty </Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' >Gift Sports & Toys</Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Textiles & Accessories</Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Packaging & Office</Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' >Metallurgy, Chemicals</Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' >Arts, Crafts & Sewing</Link></li>
                    </ul>
                </div>
                <div className='text-[#CCCCCC]'>
                    <h3 className=''>CATEGORIES</h3>
                    <hr className="w-8 h-0.5  bg-[#FF5500] mt-1" />
                    <ul className='list-none mt-4'>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Event & Party Supplies </Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Home Improvement</Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' >Lamps & Light Fixtures</Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Kitchen & Bath Fixtures</Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' > Kitchen & Dining</Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' >Stationery & Party Supplies</Link></li>
                        <li className='hover:text-[#FF5C00]'><Link href='#' className='text-xs' >All Categories</Link></li>
                    </ul>
                </div>
                <div className='text-[#CCCCCC] flex flex-col col-span-2 space-y-4'>
                    <h3 className=''>ABOUT US</h3>
                    <hr className="w-8 h-0.5  bg-[#FF5500] mt-1" />
                    <ul className='list-none mt-4'>
                        <div className='flex justify-between	items-center'>
                            <FontAwesomeIcon icon={faMapLocationDot} />
                            <li className='hover:text-[#FF5C00] ml-4'><Link href='#' className='text-xs' > San Luis Potosis Centro Historico, 78000 San Luis Potosis, SLP, Mexico </Link></li>
                        </div>
                        <div className='flex items-center mt-2'>
                            <FontAwesomeIcon icon={faHeadset} />
                            <li className='hover:text-[#FF5C00] ml-4'><Link href='#' className='text-xs' > (+0214)0 315 215 - (+0214)0 315 215 </Link></li>
                        </div>
                        <div className='flex  items-center mt-2'>
                            <FontAwesomeIcon icon={faEnvelopeOpenText} />
                            <li className='hover:text-[#FF5C00] ml-4'><Link href='#' className='text-xs' > Support_syber@domain.com </Link></li>
                        </div>
                        <div className='flex  items-center mt-2'>
                            <FontAwesomeIcon icon={faAddressBook} />
                            <li className='hover:text-[#FF5C00] ml-4'><Link href='#' className='text-xs' > Open time: 8:00AM - 16:PM</Link></li>
                        </div>

                    </ul>
                </div>

            </div>
            <div className='lg:flex justify-between px-8 mt-6'>
                <div className="flow flex justify-between gap-5 items-center">
                    <div>
                    <span className='text-white'>FOLLOW SOCIALS</span>
                    </div>
                    <div className='text-white flex  gap-3'>
                        <FontAwesomeIcon className='hover:bg-[#FF5C00] hover:rounded-md' icon={faFacebook} />
                        <FontAwesomeIcon className='hover:bg-[#FF5C00] hover:rounded-md' icon={faTwitter} />
                        <FontAwesomeIcon className='hover:bg-[#FF5C00] hover:rounded-md' icon={faGooglePlusG} />
                        <FontAwesomeIcon className='hover:bg-[#FF5C00] hover:rounded-md' icon={faLinkedin} />
                        <FontAwesomeIcon className='hover:bg-[#FF5C00] hover:rounded-md' icon={faPinterest} />
                    </div>
                </div>
                <div className="signup lg:flex gap-3 items-center">
                    <span className='text-white'>SIGN UP FOR NEWSLETTER</span>
                    <div className="form-control">
                        
                        <label className="input-group">
                            <input type="text"  className="input input-bordered" />
                            <span className='bg-[#FF5C00] text-white'>SUBSCRIBE</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;