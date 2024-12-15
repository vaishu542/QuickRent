import React from 'react'
import Header from '../Header';
import HeaderG from './HeaderG';
import Footer from '../Footer';

const Laptops = () => {
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
      category: 'Phones',
      name: 'iQOO Z9 5G',
      price: '₹1,643.70/month',
      image: './images/Gadgets/Laptops/iQOO Z9 5G .png',
    },
    {
      id: 6,
      category: 'Phones',
      name: 'One Plus Nord CE4 ',
      price: '₹1,890.30/month',
      image: './images/Gadgets/Laptops/One Plus Nord CE4 .png',
    },
    {
      id: 7,
      category: 'Phones',
      name: 'Redmi Note 13 Pro ',
      price: '₹1,640.30/month',
      image: './images/Gadgets/Laptops/Redmi Note 13 Pro .png',
    },
    {
      id: 8,
      category: 'Phones',
      name: 'Samsung Galaxy M55s 5G ',
      price: '₹1,650.30/month',
      image: './images/Gadgets/Laptops/Samsung Galaxy M55s 5G .png',
    },
    {
      id: 9,
      category: 'Tablets',
      name: 'Samsung Galaxy Tab S9 FE  ',
      price: '₹2,876.70/month',
      image: './images/Gadgets/Laptops/Samsung Galaxy Tab S9 FE .png',
    },
    {
      id: 10,
      category: 'Tablets',
      name: 'OnePlus Pad 2  ',
      price: '₹3,041.10/month',
      image: './images/Gadgets/Laptops/OnePlus Pad 2 .png',
    },
    {
      id: 11,
      category: 'Tablets',
      name: 'OnePlus Pad Go',
      price: ' ₹1,725.90/month',
      image: './images/Gadgets/Laptops/OnePlus Pad Go .png',
    },
    {
      id: 12,
      category: 'Tablets',
      name: 'Samsung Galaxy Tab S9 FE+  ',
      price: '₹3,123.30/month',
      image: './images/Gadgets/Laptops/Samsung Galaxy Tab S9 FE+ .png',
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
      <Footer/>
    </>
  );
}

export default Laptops
