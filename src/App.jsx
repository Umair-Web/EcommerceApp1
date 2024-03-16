import React,{useState} from 'react'
import { Clients,Navbar,Contact,Download,Favourite,Hero,Product,Footer } from './components'

const App = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div>
      <div className="fixed bottom-3 right-3 z-[1000] ">
      <label className='flex cursor-pointer  select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div className='block h-8 w-14 rounded-full border-[1px] border-black bg-yellow-300'></div>
          <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-black  transition'></div>
        </div>
      </label>
      </div>
      <Navbar/>
      <Hero blur={isChecked}/>
      <Clients/>
      <Product blur={isChecked} />
      <Favourite blur={isChecked}/>
      <Download/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App