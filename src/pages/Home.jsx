import React from 'react'
import { Helmet } from 'react-helmet-async'

import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GARAI WEAR – Premium Fashion & Streetwear</title>
        <meta
          name="description"
          content="Shop GARAI WEAR’s latest collection of streetwear and premium fashion. Discover bestsellers, stylish hoodies, and more."
        />
        <meta
          name="keywords"
          content="GARAI WEAR , jama pan, fashion, streetwear, hoodie, t-shirt, online shopping, best seller clothes"
        />
        <link rel="canonical" href="https://www.delvario.com/" />

      </Helmet>

      <div>
        <Hero />
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsletterBox />
      </div>
    </>
  )
}

export default Home
