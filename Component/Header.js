
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import hotpng from '../public/hot-icon.png'
const Header = () => {
    const { data: session, status } = useSession()
    const [loading, setLoading] = useState(false)
    const handleNavIcon = () => {
        setLoading(current => !current)

    }
    if (!session) {
        return (<>
            <div className="navbar bg-[#202634] text-white">
                {/* responsive navbar */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleNavIcon} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {
                            loading && <ul tabIndex={0} className=" text-white hover:shadow-lg text-2xl font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#171a1d] rounded-box w-52">
                                <li><Link href="/">HOME</Link></li>
                                <li><Link href="feature">FEATURE</Link></li>
                                <li><Link href="/products">PRODUCTS</Link></li>
                                <li><Link href="about">ABOUT US</Link></li>
                                <li><Link href="contact">CONTACT US</Link></li>
                                <li><Link href="/api/auth/signin">LOGIN</Link></li>
                            </ul>
                        }
                    </div>
                    <Link href="/" className="btn btn-ghost normal-case text-xl"><Image className='w-20' src={logo} alt="logo" width='250' height='250' /></Link>
                </div>


                <div className="flex-1">

                </div>
                <div className="flex-none">
                    <ul className='hover:shadow-lg hidden lg:flex gap-5 mr-14 font-semibold'>
                        <li className="text-[#FF5C00]"><Link href="/">HOME</Link></li>
                        <li className="hover:text-[#FF5C00] relative"><Link href="feature">FEATURE</Link></li>
                        <div className=" absolute ml-24 mt-[-1%]"><Image src={hotpng} width='20' height='20' alt='hotpng'></Image></div>
                        <li className="hover:text-[#FF5C00] "><Link href="/products">PRODUCTS</Link></li>
                        <li className="hover:text-[#FF5C00] "><Link href="about">ABOUT US</Link></li>
                        <li className="hover:text-[#FF5C00] "><Link href="contact">CONTACT US</Link></li>
                        <li className="hover:text-[#FF5C00] "><Link href="/api/auth/signin">LOGIN</Link></li>
                    </ul>
                    <div className="dropdown dropdown-end ">
                        <label  className="btn btn-ghost btn-circle mt-3">
                            <div className="indicator ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item bg-[#FF5C00]">8</span>
                            </div>
                        </label>
                        <div  className=" card card-compact dropdown-content w-44 bg-base-100 shadow">
                         
                            </div>
                            <label tabIndex={2} className="btn btn-ghost btn-circle avatar ">
                                <div className="w-12 rounded-full mt[-4%]">
                                    <FontAwesomeIcon className='' icon={faUser} />
                                </div>
                            </label>
                            <ul tabIndex={2} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-500 rounded-box w-52">
                                <li>
                                    <a className="justify-between">

                                        <li><Link href="/api/auth/signin">Login</Link></li>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </>
            )
        }

            if(session){
       return(
            <div className="navbar bg-[#171A1D] text-white">
                {/* responsive navbar */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleNavIcon} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {
                            loading && <ul tabIndex={0} className="text-white bg-[#171a1d] text-2xl menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                                <li><Link href="/">HOME</Link></li>
                                <li><Link href="feature">FEATURE</Link></li>
                                <li><Link href="/products">PRODUCTS</Link></li>
                                <li><Link href="about">ABOUT US</Link></li>
                                <li><Link href="contact">CONTACT US</Link></li>
                                <li><Link href="/api/auth/signin">LOGIN</Link></li>


                            </ul>
                        }
                    </div>
                    <Link href="/" className="btn btn-ghost normal-case text-xl"><Image className='w-20' src={logo} alt="logo" width='150' height='150' /></Link>
                </div>


                <div className="flex-1">

                </div>
                <div className="flex-none">
                    <ul className=' hidden lg:flex gap-3 mr-10'>
                        <li className="hover:text-[#FF5C00] "><Link href="/">HOME</Link></li>
                        <li className="hover:text-[#FF5C00] relative"><Link href="feature">FEATURE</Link></li>
                        <div className=" absolute ml-24 mt-[-1%]"><Image src={hotpng} width='20' height='20' alt='hotpng'></Image></div>
                        <li className="hover:text-[#FF5C00] "><Link href="/products">PRODUCTS</Link></li>
                        <li className="hover:text-[#FF5C00] "><Link href="about">ABOUT US</Link></li>
                        <li className="hover:text-[#FF5C00] "><Link href="contact">CONTACT US</Link></li>
                        <li className="hover:text-[#FF5C00] "><Link href="/api/auth/signin">LOGIN</Link></li>
                        {/* <li><Link href="/api/auth/signin">Login</Link></li> */}

                    </ul>
                    <div className="dropdown dropdown-end">
                    <label  className="btn btn-ghost btn-circle">
                            <div className="indicator ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item bg-[#FF5C00]">8</span>
                            </div>
                        </label>
                        <div  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                         
                            </div>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image src={session.user.image} width='100' height='100' alt="profile" />


                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white bg-[#171a1d] rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {session.user.name}

                                </a>
                            </li>

                            <li ><a onClick={() => signOut()}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            )
    
    } 
        
      }
            export default Header;