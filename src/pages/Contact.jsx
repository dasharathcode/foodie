import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'  // ⬅️ Import WhatsApp icon
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import OurPolicy from '../components/OurPolicy'

const Contact = () => {
  const phoneNumber = "918436026797"; // Replace with your number
  const message = "Hello Dasharath, I need help regarding my order.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.about_jpg} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>722207  Sonamukhi <br /> Bankura, West Bengal, <br />India </p>
          <p className=' text-gray-500'>Tel: 8436026797 <br /> Email: contact.garaiwear@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>customer support</p>
          <p className=' text-gray-500'>Have a question or need help? Just reach out — we’re always here for you. At Garai Wear, support isn’t just service, it’s care. No bots, no waiting — just real people, ready to help like family.</p>

          {/* WhatsApp support button with icon */}
          <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <button className='flex items-center gap-2 border border-green-600 text-green-600 px-8 py-4 text-sm hover:bg-green-600 hover:text-white transition-all duration-500'>
              <FaWhatsapp size={20} /> Contact via WhatsApp
            </button>
          </a>
        </div>
      </div>

      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Contact
