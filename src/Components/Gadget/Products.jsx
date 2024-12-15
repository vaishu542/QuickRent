import React from 'react';
import HeaderG from './HeaderG';
import Header from '../Header';
import Footer from '../Footer';

const Products = () => {
  const products = [
    {
      id: 1,
      category: 'Laptops',
      name: 'Inspiron 15 Laptop',
      price: '₹3,186/month',
      image: './images/Gadgets/Laptops/Inspiron 15 Laptop.png',
    },
    {
      id: 2,
      category: 'Laptops',
      name: 'HP Laptop 15s',
      price: '₹4,020/month',
      image: './images/Gadgets/Laptops/HPLaptop15s.png',

    },
    {
      id: 3,
      category: 'Laptops',
      name: 'Inspiron 14 Laptop',
      price: '₹6,575/month',
      image: './images/Gadgets/Laptops/Inspiron 14 Laptop.png',

    },
    {
      id: 4,
      category: 'Laptops',
      name: 'HP 15',
      price: '₹3,180/month',
      image: './images/Gadgets/Laptops/HP15.png',

    },
    {
      id: 5,
      category: 'EarBuds',
      name: 'realme Buds Air 6',
      price: '₹203/month',
      image: './images/Gadgets/EarBuds/realme Buds Air 6 (2).png',

    },
    {
      id: 6,
      category: 'EarBuds',
      name: 'OnePlus Nord Buds 3 ',
      price: '₹198/month',
      image: './images/Gadgets/EarBuds/OnePlus Nord Buds 3.png',

    },
    {
      id: 7,
      category: 'EarBuds',
      name: 'Samsung Galaxy FE ',
      price: '₹223/month',
      image: './images/Gadgets/EarBuds/Samsung Galaxy FE.png',
    },
    {
      id: 8,
      category: 'EarBuds',
      name: 'realme Buds Air 6',
      price: '₹209/month',
      image: './images/Gadgets/EarBuds/realme Buds Air 6.png',

    }, {
      id: 9,
      category: 'Smart Devices',
      name: 'Amazon Echo Dot 3rd Gen ',
      price: '₹287.70/month',
      image: './images/Gadgets/SmartDevices/Amazon Echo Dot 3rd Gen.png',
    },
    {
      id: 10,
      category: 'Smart Devices',
      name: 'Amazon Echo Dot 5th Gen',
      price: '₹493.20/month',
      image: './images/Gadgets/SmartDevices/Amazon Echo Dot 5th Gen.png',
    },
    {
      id: 11,
      category: 'Smart Devices',
      name: 'Amazon Echo Show 5',
      price: ' ₹657.60/month.',
      image: './images/Gadgets/SmartDevices/Amazon Echo Show 5.png',
    },
    {
      id: 12,
      category: 'Watchs',
      name: 'Noise ColorFit Pro 4 Alpha',
      price: '₹203/month',
      image: './images/Gadgets/Watchs/Noise ColorFit Pro 4 Alpha.png',

    },
    {
      id: 13,
      category: 'Watchs',
      name: 'Pebble Ascent',
      price: '₹198/month',
      image: './images/Gadgets/Watchs/Pebble Ascent.png',

    },
    {
      id: 14,
      category: 'Watchs',
      name: 'Pebble Wave ',
      price: '₹223/month',
      image: './images/Gadgets/Watchs/Pebble Wave.png',
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 object-cover">
            {products.map(product => (
              <div
                key={product.id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full group relative"
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={product.name}
                    className="object-contain object-center w-full h-full block group-hover:opacity-50 transition-opacity duration-300"
                    src={product.image}
                  />
                </a>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                  <p className="mt-1">{product.price}</p>
                </div>
                {/* Add to Cart Button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-2xl border-solid border-2 border-gray-300 px-4 py-2 mb-6 tracking-wider'>
            View More On Category
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
