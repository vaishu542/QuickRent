import React from 'react'
import Header from '../Header';
import HeaderG from './HeaderG';
import Footer from '../Footer';

const Watchs = () => {
  const products = [
    {
      id: 1,
      category: 'Watchs',
      name: 'boAt Cosmos Plus ',
      price: '₹222/month',
      image: './images/Gadgets/Watchs/boAt Cosmos Plus.png',
    },
    {
      id: 2,
      category: 'Watchs',
      name: 'Boat Lunar Peak',
      price: '₹220/month',
      image: './images/Gadgets/Watchs/Boat Lunar Peak.png',
    },
    {
      id: 3,
      category: 'Watchs',
      name: 'ColorFit Pulse 4 Max',
      price: '₹279/month',
      image: './images/Gadgets/Watchs/ColorFit Pulse 4 Max.png',
    },
    {
      id: 4,
      category: 'Watchs',
      name: 'Fastrack New Astor Fs1',
      price: '₹222/month',
      image: './images/Gadgets/Watchs/Fastrack New Astor Fs1.png',


    },
    {
      id: 5,
      category: 'Watchs',
      name: 'Noise ColorFit Pro 4 Alpha',
      price: '₹203/month',
      image: './images/Gadgets/Watchs/Noise ColorFit Pro 4 Alpha.png',

    },
    {
      id: 6,
      category: 'Watchs',
      name: 'Pebble Ascent',
      price: '₹198/month',
      image: './images/Gadgets/Watchs/Pebble Ascent.png',

    },
    {
      id: 7,
      category: 'Watchs',
      name: 'Pebble Wave ',
      price: '₹223/month',
      image: './images/Gadgets/Watchs/Pebble Wave.png',
    },

  ];

  return (
    <>
      <Header />
      <HeaderG />
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
      </section>
      <Footer />
    </>
  );
}

export default Watchs;
