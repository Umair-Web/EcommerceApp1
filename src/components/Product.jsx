import React,{useEffect} from 'react'
import { hoddiee,coats,Tshirt,arrow } from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Product = ({blur}) => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div id='s2' className="max-w-[1640px] mx-auto px-2 mt-11">
      <div className='flex flex-col items-start justify-between'>
        {/* Upper */}
        <div data-aos="zoom-in">
          <h1 className=' text-[36px] sm:text-[46px] lg:text-[56px] font-extrabold font-poppins'>NEW <span  className='bg-yellow-300 pr-12'>ARRIVALS</span> </h1>
        </div>
        {/* Bottom */}
        <div data-aos="zoom-in-right" className='grid grid-cols-1 lg:grid-cols-2 gap-4 xl:grid-cols-3 mt-20 '>
          <div className='flex flex-col gap-4'>
            <img src={hoddiee} alt="Hoddiee" className={`w-full  h-[550px] sm:h-[704px] object-cover object-[70%] ${blur?"blur-md":""}`} />
             <div className='flex flex-row items-center justify-between'>
              <p className='font-poppins font-semibold text-[24px] tracking-wide'>Hoodies & Sweetshirt</p>
              <img src={arrow} alt="" />
             </div>
             <p className="text-[22px] text-gray-500 font-poppins">Explore Now!</p>
          </div>

          <div  data-aos="zoom-out-up" className='flex flex-col gap-4 '>
            <img src={coats} alt="Hoddiee" className= {`w-full  h-[550px] sm:h-[704px] object-cover object-[36%] md:object-[25%] ${blur?"blur-md":""}`} />
            <div className='flex flex-row items-center justify-between'>
              <p className='font-poppins font-semibold text-[24px] tracking-wide'>Coats & Parkas</p>
              <img src={arrow} alt="" />
             </div>
             <p className="text-[22px] text-gray-500 font-poppins">Explore Now!</p>
          </div>

          <div data-aos="zoom-in-left" className='flex flex-col gap-4'>
            <img src={Tshirt} alt="Hoddiee" className={`w-full  h-[550px] sm:h-[704px] object-cover object-[45%] md:object-[39%] ${blur?"blur-md":""}`} />
            <div className='flex flex-row items-center justify-between'>
              <p className='font-poppins font-semibold text-[24px] tracking-wide'>Tees & T-Shirt</p>
              <img src={arrow} alt="" />
             </div>
             <p className="text-[22px] text-gray-500 font-poppins">Explore Now!</p>
          </div>


        </div>

        {/* <div className='flex flex-row flex-wrap items-center gap-14 mt-20'>
          <div className='flex flex-col gap-4'>
            <img src={hoddiee} alt="Hoddiee" className='w-full sm:max-w-[285px] sm:max-h-[400px] md:max-w-[340px] lg:max-w-[500px] lg:max-h-[700px] h-[700px] object-cover object-[70%]' />
             <div className='flex flex-row items-center justify-between'>
              <p className='font-poppins font-semibold text-[24px] tracking-wide'>Hoodies & Sweetshirt</p>
              <img src={arrow} alt="" />
             </div>
             <p className="text-[22px] text-gray-500">Explore Now!</p>
          </div>

          <div className='flex flex-col gap-4'>
            <img src={coats} alt="Hoddiee" className='w-full sm:max-w-[285px] sm:max-h-[400px] md:max-w-[340px] lg:max-w-[500px]  lg:max-h-[700px] h-[700px] object-cover object-[36%] md:object-[25%]' />
            <div className='flex flex-row items-center justify-between'>
              <p className='font-poppins font-semibold text-[24px] tracking-wide'>Coats & Parkas</p>
              <img src={arrow} alt="" />
             </div>
             <p className="text-[22px] text-gray-500">Explore Now!</p>
          </div>

          <div className='flex flex-col gap-4'>
            <img src={Tshirt} alt="Hoddiee" className='w-full sm:max-w-[285px] sm:max-h-[400px] md:max-w-[340px] lg:max-w-[500px] lg:max-h-[700px]  h-[700px] object-cover object-[45%] md:object-[39%]' />
            <div className='flex flex-row items-center justify-between'>
              <p className='font-poppins font-semibold text-[24px] tracking-wide'>Tees & T-Shirt</p>
              <img src={arrow} alt="" />
             </div>
             <p className="text-[22px] text-gray-500">Explore Now!</p>
          </div>


        </div> */}
      </div>
    </div>
  )
}

export default Product