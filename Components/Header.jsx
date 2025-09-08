import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#be185d] bg-pink-100 hover:bg-pink-200 rounded-lg'>
              Get Started <Image src={assets.arrow}></Image>
            </button>
        </div>

      <div className="text-center my-8">
  <h1 className="text-3xl sm:text-5xl font-medium">Latest Blog</h1>
  <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
    Welcome to Scribo, your space for fresh ideas and insights. From the latest trends in technology to smart lifestyle choices and 
    inspiring startup stories, our blogs are crafted to keep you informed, motivated, and ahead of the curve.
  </p>

  <form
    className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] bg-pink-100"
    action=""
  >
    <input
      type="email"
      placeholder="Enter your Email"
      className="pl-4 outline-none flex-1"
    />
    <button type='submit' className="py-4 px-4 sm:px-8 active:bg-pink-200 active:text-white">
      Subscribe
    </button>
  </form>
</div>

      
    </div>
  )
}

export default Header
