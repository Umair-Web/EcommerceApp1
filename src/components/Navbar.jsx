import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll';
import { logoblack } from '../assets'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto px-2 py-9">
      <div className='flex items-center justify-between'>
        {/* Main */}
        <div><img src={logoblack} className='h-[54px] w-[220px] object-contain' /></div>
        <div>
          <ul className='lg:flex flex-row justify-between items-center gap-14 font-poppins font-normal text-[24px] tracking-wide hidden cursor-pointer'>

            <li><Link to="s1" spy={true} smooth={true} offset={50} duration={500}>CATALOGUE</Link></li>
            <li><Link to="s2" spy={true} smooth={true} offset={50} duration={500}>FASHION</Link></li>
            <li><Link to="s3" spy={true} smooth={true} offset={50} duration={500}>FAVOURITE</Link></li>
            <li><Link to="s4" spy={true} smooth={true} offset={50} duration={500}>LIFESTYLE</Link></li>


          </ul>
        </div>
        <div className='lg:flex hidden'>
          <button className="bg-black text-white py-3 px-4 text-[20px] text-center">Sign Up</button>
        </div>
        <div className='lg:hidden'>
          <AiOutlineMenu size={30} onClick={() => (setNav(!nav))} />
        </div>
        {/* Side */}
        {nav ? <div className='fixed top-0 left-0 z-10 h-full w-full bg-black/50' ></div> : ""}

        <div className={`fixed top-0 ${nav ? "left-0" : "left-[-300px]"}  duration-300 z-10 w-[210px] h-full bg-yellow-300 flex flex-col items-start px-2 py-11`}>
          <div className='flex flex-row gap-11 items-center'>
            <img src={logoblack} alt="" className='h-[35px] w-[130px] object-contain' />
            <AiOutlineClose size={30} onClick={() => (setNav(!nav))} />
          </div>
          <div className='my-8'>
            <ul className='flex flex-col items-start gap-y-6 font-poppins font-normal text-[18px] tracking-wide ml-1 cursor-pointer'>
            <li><Link to="s1" spy={true} smooth={true} offset={50} duration={500}>CATALOGUE</Link></li>
            <li><Link to="s2" spy={true} smooth={true} offset={50} duration={500}>FASHION</Link></li>
            <li><Link to="s3" spy={true} smooth={true} offset={50} duration={500}>FAVOURITE</Link></li>
            <li><Link to="s4" spy={true} smooth={true} offset={50} duration={500}>LIFESTYLE</Link></li>
            </ul>
          </div>
          <div className='' >
            <button className="bg-black text-white py-2 px-3 w-[194px]  text-[15px] text-center">Sign Up</button>
          </div>


        </div>

      </div>

    </div>
  )
}

export default Navbar