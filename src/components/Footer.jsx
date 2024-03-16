import React from 'react'
import { FASHION,fb,insta,twitter,linkedin } from '../assets'
const Footer = () => {
  return (
    <div className="w-full bg-black ">
      {/* main */}
      <div className='flex flex-row flex-wrap justify-between gap-y-10 xl:gap-y-0 max-w-[1640px] mx-auto px-2 py-20'>
        {/* left */}
        <div className='flex flex-col items-start gap-3'>
          <img src={FASHION} alt="" />
          <p className='font-poppins text-white text-[20px] tracking-wider'>Complete your style with awesome
            clothes from us.</p>
            <div className='flex gap-2'>
              <img src={fb} alt="Facebook" />
              <img src={insta} alt="Insta" />
              <img src={twitter} alt="Twitter" />
              <img src={linkedin} alt="Linkedin" />
            </div>
        </div>
        {/* right */}
        <div className='flex flex-row justify-between gap-20 sm:gap-40 flex-wrap '>
          <div >
            <ul className='text-white flex flex-col gap-10 font-poppins'>
              <li className="text-[20px] tracking-wider font-poppins font-bold">Company</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Support</li>
              <li>Carrers</li>
            </ul>
          </div>
          <div>
            <ul className='text-white flex flex-col gap-10 font-poppins'>
              <li className="text-[20px] tracking-wider font-poppins font-bold">Quick Link</li>
              <li>Share Location</li>
              <li>Orders Tracking</li>
              <li>Size Guide</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <ul className='text-white flex flex-col gap-10 font-poppins'>
              <li className="text-[20px] tracking-wider font-poppins font-bold">Legal</li>
              <li>Terms & conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t-[1px] max-w-[1640px] mx-auto border-white h-10'>
        <p className='text-white mt-1 font-poppins tracking-wider'>Made by Umair Khan.</p>
      </div>
    </div>
  )
}

export default Footer