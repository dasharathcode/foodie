import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { assets } from '../assets/assets'  // adjust path if Hero.jsx is in components



const Hero = () => {
  const [bannerUrl, setBannerUrl] = useState('')

  useEffect(() => {
    axios.get('https://delvrio.onrender.com/api/banner')
      .then(res => setBannerUrl(res.data.imageUrl))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className="bg-cover bg-center py-20 px-4 sm:px-10" style={{
     
    }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Side: Text */}
        <div className="text-center md:text-left max-w-xl">
          <p className="text-orange-500 text-xl font-shadows mb-4">Eat Sleep And</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Supper delicious chicken biryani!
          </h1>
          <p className="text-[rgb(255 96 0);] mb-6">
            Food is any substance consumed to provide nutritional support for an organism.
          </p>


          <a
            href="#footer"
            className="inline-block bg-orange-500 hover:bg-white hover:text-black transition-all duration-300 text-white font-semibold px-6 py-3 rounded"
          >
            Book A Table
          </a>
        </div>

        {/* Right Side: Dynamic Image */}
        <div className="max-w-lg">
          {bannerUrl && (
            <img src={bannerUrl} alt="Hero Dish" className="w-full rounded-lg " />
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero


