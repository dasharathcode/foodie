import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-48' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            "Delvario is a premium fashion brand born in the heart of West Bengal, where every piece is crafted with love, care, and top-quality standards. We don't just deliver clothes — we deliver an experience. Our customer care is something we take great pride in, always ready to support you with warmth and honesty. And if you're located within PIN 722207, your order will be hand-delivered by me personally within the same day — because to us, you're not just a customer, you're family. With premium packaging, curated style, and a personal touch — this is Delvario.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
               <li>  about</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 8436026797</li>
                <li>contact.delvario@gmail.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Delvario.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
