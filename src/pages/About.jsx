import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_jpg} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>I’m Dasharath Garai, the founder of Garai Wear. I started this brand in 2025 with a simple yet powerful idea:

            “Everyone deserves to wear premium, stylish clothing — without spending a fortune.”

            Born and built in West Bengal, Garai Wear is more than just a clothing label. It’s a promise of quality, comfort, and care — all delivered with a personal touch.</p>
          <p>What makes us different?

            ✨ Premium Packaging – because first impressions matter.

            🚀 Fast & Reliable Delivery – including 1-day delivery in PIN 722207, often by me personally.

            🧵 Unique Styles – designed to stand out without being loud.

            💬 Personal Customer Care – real support, no bots. Ever.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Garai Wear is just getting started. We’re working toward opening physical stores soon — so you can feel the fabric, try the fit, and experience the warmth of our brand in person.

            Whether you're dressing for yourself, for work, or for someone you love — Garai Wear is here to serve you with honesty, care, and creativity.

            Thank you for being part of our journey.

            With love,
            Dasharath
            Founder, Garai Wear</p>
        </div>
      </div>

      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>✅ Premium Quality at Low Prices:</b>
          <p className=' text-gray-600'>We believe everyone deserves luxury. That’s why we deliver high-end clothing at prices that won’t hurt your wallet — without cutting corners on quality.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>🚚 Superfast Local Delivery</b>
          <p className=' text-gray-600'>If you're in PIN 722207, expect your order at your doorstep within 1 day — sometimes, I even deliver it myself.
            Live a bit farther? No problem — we ship quickly all across West Bengal and India, so you never have to wait long.
            Every package is wrapped with care in premium, gift-style packaging — because you deserve something that feels truly special the moment it arrives.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>🧡 Personalized Customer Care</b>
          <p className=' text-gray-600'>Garai Wear isn’t a factory brand — it’s a family. From order to delivery, we stay connected with every customer and ensure your satisfaction at every step.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
