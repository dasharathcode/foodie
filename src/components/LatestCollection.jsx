

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products])

  return (


    <section className=" text-center py-10       bg-[#fffef9]      " id="food-menu">
      <div className="w-px bg-black" /> {/* Vertical line */}
      <div className="container mx-auto px-4">
        <p className=" text-sm font-medium mb-[15px] text-red-500">Popular Dishes</p>
        <h2 className="text-3xl font-bold my-2">
          Our Delicious <span className="text-orange-500">Foods</span>
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Food is any substance consumed to provide nutritional support for an organism.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button className="px-5 py-2 border border-gray-300 text-black bg-white hover:bg-orange-500 hover:text-white transition rounded-full">All</button>
          <button className="px-5 py-2 border border-gray-300 text-black bg-white hover:bg-orange-500 hover:text-white transition rounded-full">Pizza</button>
          <button className="px-5 py-2 border border-gray-300 text-black bg-white hover:bg-orange-500 hover:text-white transition rounded-full">Burger</button>
          <button className="px-5 py-2 border border-gray-300 text-black bg-white hover:bg-orange-500 hover:text-white transition rounded-full">Drinks</button>
          <button className="px-5 py-2 border border-gray-300 text-black bg-white hover:bg-orange-500 hover:text-white transition rounded-full">Sandwich</button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {latestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>

    </section>
  )
}

export default LatestCollection
