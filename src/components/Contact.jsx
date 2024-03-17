import React from 'react'

const Contact = () => {
  return (
    <div className="w-full bg-yellow-300 items-center h-auto mt-20 xs:py-10 sm:py-36 px-4">
      <div className='flex flex-col text-center items-center gap-9'>
        <h1 className=' text-[30px] tracking-wide text-white sm:text-[46px] lg:text-[56px] font-extrabold font-poppins text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]'>JOIN SHOPPING COMMUNITY TO
          GET MONTHLY PROMO</h1>
        <p className='text-white font-poppins text-[20px] tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]'>Type your email down below and be young wild generation</p>
        <div className='flex flex-row  border-2 border-black p-3 h-20 bg-white xs:w-[230px] ss:w-[330px] sm:w-[430px]'>
          <input type="email" placeholder='type your email here' className='font-poppins px-2 outline-none w-full text-[11px] xs:text-[13px] ss:text-[19px] sm:text-[22px]' />
          <button className="bg-black text-white xs:px-2 ss:py-3 ss:px-4 text-[14px] ss:text-[20px] text-center">SEND</button>
        </div>
      </div>
    </div>
  )
}

export default Contact