import React from 'react'
import Header from '../Header'

const HeroG = () => {
  return (
    <div>
      <Header />
      <div className=" banner bg-red-600 px-8 py-4 rounded-lg flex items-center justify-between mx-5 my-3" >
        {/* Left Section */}
        <div className="left-part text-white">
          <p className="text-sm font-medium mb-2">25% OFF</p>
          <h1 className="text-5xl font-bold mb-2">WINTER SALE</h1>
          <p className="text-lg font-light mb-4">20 Dec to 10 Jan</p>
          <h2 className="text-xl font-semibold mb-2">Top Gadgets, Great Prices</h2>
          <p className="text-sm mb-6">
            Upgrade your experience with the latest gadgets, delivered right to your doorstep. Limited-time savings!
          </p>
          <button class="bg-white text-gray-800 px-4 py-2 rounded-xl flex items-center space-x-2 shadow-md hover:bg-gray-100">
            <span>Explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>

          </button>

        </div>

        {/* right Section */}
        <div className='right-part hidden md:inline'>
          <img
            src="./images/Gadgets/headphone.png"
            alt="QuickRent Gadgets"
            className="h-[400px]  object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroG
