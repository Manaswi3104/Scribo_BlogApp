import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-pink-100 py-5 items-center'>
      <Image src={assets.logo} alt='' width={120} />
      <p className='text-small '>All right reserved. Copyright @scribo</p>
      <div className='flex'>
        <Image src={assets.facebook_icon} alt='' width={40}/>
         <Image src={assets.twitter_icon} alt='' width={40}/>
          <Image src={assets.googleplus_icon} alt='' width={40}/>
      </div>
    </div>
  )
}

export default Footer
