import React,{useEffect} from 'react'
import { bannerimg2,bannerImg } from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Hero = ({blur}) => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div id='s1' className="max-w-[1640px] mx-auto px-2 mt-[-10px] sm:mt-5 bg-[#f4f6f5] ">
      <div className='flex flex-row flex-wrap items-center justify-around py-[30px] '>
        {/* Left */}
        <div data-aos="fade-right" className='flex flex-col gap-y-5'>
          <h1 className=' text-[46px] sm:text-[86px] lg:text-[95px] font-extrabold font-poppins'><span className="bg-white pr-16">LET'S</span> <br />EXPLORE<br /><span className='bg-yellow-300 pr-16'>UNIQUE</span><br />CLOTHES.</h1>
          <div><p className='font-poppins text-normal text-[22px] sm:text-[28px]'>Live For Influential And Innovative Fashion</p></div>
          <div className='flex flex-row gap-2 items-center'>
            <img src={bannerimg2} className='w-[150px] sm:w-[250px] object-cover'  />
            <button className="bg-black text-white xs:py-1 xs:px-2 xs:text-[15px] ss:py-3 ss:px-4 ss:text-[20px] text-center">Shop now</button>
          </div>
        </div>
        {/* right */}
        <div data-aos="fade-left" className='mt-10'>
          <img src={bannerImg} alt="" className={`w-full ss:h-[630px] sm:h-[800px] object-cover ${blur?"blur-md":""} duration-200`} />
        </div>
      </div>
   
    </div>
  )
}

export default Hero