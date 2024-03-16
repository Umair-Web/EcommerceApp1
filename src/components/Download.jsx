import React from 'react'
import {  playstore,applestore,mobileapp} from '../assets'
const Download = () => {
  return (
    <div id='s4' className="max-w-[1640px] mx-auto px-2 mt-32">
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:gap-x-60 items-center mt-20'>
        <div className='flex flex-col justify-between gap-y-4'>
          <h1 className=' text-[36px] sm:text-[46px] lg:text-[56px] font-extrabold font-poppins'>DOWNLOAD APP &
            GET THE VOUCHER!</h1>
          <p className="text-[22px] text-gray-500 font-poppins tracking-wide">Get 30% off for first transaction using
            Rondovision mobile app for now.</p>
          <div className='flex flex-row gap-3  items-start'>
            <img src={applestore} alt=""  className='w-[130px] h-12 ' />
            <img src={playstore} alt=""  className='w-[130px] h-12 ' />
          </div>
        </div>
        <div>
          <img src={mobileapp} alt="" />
        </div>





      </div>
    </div>
  )
}

export default Download