import React from 'react'
import { lacoste,amazon,shopify,hm,levis,obey } from '../assets'
const img=[lacoste,shopify,hm,levis,obey];

const Clients = () => {
  return (
    <div className='w-full mt-14'>
      <div className='h-[100px] xl:h-[200px] bg-yellow-300 flex flex-row items-center justify-between px-2 sm:px-6 xl:px-36'>
        {img.map((img)=>(
          <img src={img} className='w-[70px] sm:w-[90px] xl:w-[170px] object-contain'/>
        ))}

      </div>
    </div>
  )
}

export default Clients