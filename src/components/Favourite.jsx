import React,{useEffect} from 'react'
import { fav1,fav2,arrow } from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Favourite = ({blur}) => {
  useEffect(()=>{
    Aos.init();
  })

  const fav=[
    {
    text:"Trending on instagram",
    img:fav1,
    arrow,
    exp:"Explore Now"
    
  },
  {
    text:"Hoodies & Sweetshirt",
    img:fav2,
    arrow,
    exp:"Explore Now"
    
  }
];
  console.log("text1"+fav.at(0).text1)
  return (
    <div  id='s3' className="max-w-[1640px] mx-auto px-2 mt-32">
      <div className='flex flex-col items-start justify-between'>
        {/* Upper */}
        <div data-aos="zoom-in">
          <h1 className=' text-[36px] sm:text-[46px] lg:text-[56px] font-extrabold font-poppins'>YOUNG'S <span  className='bg-yellow-300 pr-12'>FAVOURITE</span> </h1>
        </div>
        {/* Bottom */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20'>
          {fav.map((obj,index)=>(
             <div data-aos="flip-right" key={index} className='flex flex-col gap-4'>
             <img src={obj.img} alt="Hoddiee" className={`w-full  h-[550px] sm:h-[704px] object-cover ${index==1?"object-[46%] md:object-[25%]":"object-[26%]"}  ${blur?"blur-md":""}`} />
              <div className='flex flex-row items-center justify-between'>
               <p className='font-poppins font-semibold text-[24px] tracking-wide'>{obj.text}</p>
               <img src={obj.arrow} alt="" />
              </div>
              <p className="text-[22px] text-gray-500 font-poppins">{obj.exp}</p>
           </div>
 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favourite