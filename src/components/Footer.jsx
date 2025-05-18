// Footer.jsx
import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import { assets } from '../assets/assets';


const Footer = () => {
  const deliveryBoyRef = useRef(null);
  let deliveryBoyMove = -80;
  let lastScrollPos = 0;

  useEffect(() => {
    const handleScroll = () => {
      const deliveryBoy = deliveryBoyRef.current;
      if (!deliveryBoy) return;

      const deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;
      if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
        let activeScrollPos = window.scrollY;

        deliveryBoyMove += activeScrollPos > lastScrollPos ? 1 : -1;
        lastScrollPos = activeScrollPos;

        deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="overflow-hidden">
      <div className="relative py-28 border-b-2 border-gray-300 bg-bottom bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${assets.footer_illustration})` }}>
        <img
          // src={assets.delivery_boy}
        //   alt="Delivery Boy"
        //   ref={deliveryBoyRef}
        //  className="absolute bottom-0 left-5 w-40 z-10"
        />
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-4">
          {/* Footer Brand */}
          <div>
            <a href="#" className="text-4xl font-bold text-gray-900">
              Foodie<span className="text-orange-500">.</span>
            </a>
            <p className="mt-4 mb-6 text-gray-600">
              Financial experts support or help you to to find out which way you can raise your funds more.
            </p>
            <div className="flex gap-2">
              <a href="#" className="p-2 bg-orange-500 text-white text-xl hover:bg-gray-900">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-orange-500 text-white text-xl hover:bg-gray-900">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-orange-500 text-white text-xl hover:bg-gray-900">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-orange-500 text-white text-xl hover:bg-gray-900">
                <FaPinterest />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <ul>
            <li className="text-lg font-semibold text-gray-900 mb-5 relative inline-block after:content-[''] after:block after:absolute after:top-1/2 after:left-full after:ml-4 after:h-1 after:w-10 after:bg-orange-500 after:border-r-[5px] after:border-white"></li>
            <li className="mb-3 text-gray-700">+91 999999999</li>
            <li className="mb-3 text-gray-700">Info@YourGmail24.com</li>
            <li className="text-gray-700 max-w-[20ch]">Sonamukhi, Patharmora, 722207</li>
          </ul>

          {/* Opening Hours */}
          <ul>
            <li className="text-lg font-semibold text-gray-900 mb-5 relative inline-block after:content-[''] after:block after:absolute after:top-1/2 after:left-full after:ml-4 after:h-1 after:w-10 after:bg-orange-500 after:border-r-[5px] after:border-white">
              Opening Hours
            </li>
            <li className="mb-3 text-gray-700">Monday-Friday: 08:00-22:00</li>
            <li className="mb-3 text-gray-700">Tuesday 4PM: Till Mid Night</li>
            <li className="text-gray-700">Saturday: 10:00-16:00</li>
          </ul>

          {/* Reservation Form */}
          <form className="bg-white p-6 border border-gray-200 shadow-md">
            <p className="text-lg font-semibold text-gray-900 mb-5">Book a Table</p>
            <div className="grid gap-3 mb-3">
              <input type="text" name="full_name" placeholder="Your Name" className="border border-gray-300 p-2 text-gray-600 placeholder-gray-500" required />
              <input type="email" name="email_address" placeholder="Email" className="border border-gray-300 p-2 text-gray-600 placeholder-gray-500" required />
            </div>
            <div className="grid gap-3 mb-3">
              <select name="total_person" className="border border-gray-300 p-2 text-gray-600">
                <option>Person</option>
                <option>2 Person</option>
                <option>3 Person</option>
                <option>4 Person</option>
                <option>5 Person</option>
              </select>
              <input type="date" name="booking_date" className="border border-gray-300 p-2 text-gray-600" />
            </div>
            <textarea name="message" placeholder="Message" className="border border-gray-300 p-2 h-24 resize-y text-gray-600 placeholder-gray-500 mb-3" required></textarea>
            <button type="submit" className="bg-orange-500 hover:bg-gray-900 text-white py-2 px-6">
              Book a Table
            </button>
          </form>
        </div>
      </div>

      <div className="py-5 text-center bg-white">
        <p className="text-gray-600">
          &copy; 2025 <a href="#" className="hover:underline">Dasharath Garai</a> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;





