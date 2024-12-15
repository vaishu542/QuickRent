import React from 'react'
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <Header />
      <div className="about">
        <div className="flex flex-col h-[100%]">
          <div className="w-screen-lg  px-4 sm:px-6 lg:px-8">
            <div className=" w-[100%] flex flex-col md:flex-row items-center justify-between mt-10">
              <div className="md:w-1/2 space-y-4">
                <p className='text-base text-gray-600'>A little About Us</p>
                <h1 className="text-3xl md:text-4xl font-bold">Empowering Gadget Rentals</h1>
                <p className="text-gray-800 text-sm md:text-base">
                  The creation of a seamless rental platform where everyone has the opportunity to access the latest gadgets without breaking the bank. QuickRent not only simplifies gadget rentals but also enables smarter and cost-effective technology experiences for all users.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                  <li className='list-none'><strong>🔹 Wide Variety of Gadgets</strong>: Laptops, cameras, gaming consoles, and more at your fingertips.</li>
                  <li className='list-none'><strong>💲 Affordable Pricing</strong>: Rent your favorite gadgets at prices that suit every budget.</li>
                  <li className='list-none'><strong>🚚 Quick and Reliable Delivery</strong>: Get your gadgets delivered swiftly to your doorstep.</li>
                  <li className='list-none'><strong>💡 User-Friendly Platform</strong>: A simple, intuitive interface for both renters and gadget owners.</li>
                  <li className='list-none'><strong>🌍 Global Reach</strong>: Serving customers with branches in multiple cities worldwide.</li>
                </ul>
                <button className="bg-purple-500 hover:bg-purple-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center">
                  Read More
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
              <div className="md:w-1/2 space-y-4 mt-8 md:mt-0">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="./images/About/1.jpg"
                    alt="Coworking"
                    className="rounded-lg"
                  />
                  <img
                    src="./images/About/2.jpg"
                    alt="Remote work"
                    className="rounded-lg h-[100%]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="./images/About/3.jpg"
                    alt="Collaboration"
                    className="rounded-lg"
                  />
                  <img
                    src="./images/About/4.jpg"
                    alt="Community"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-y mt-12 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto ">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Why QuickRent?</h1>
            <p className=" text-gray-700 text-xl md:text-2xl">
              Hi! We’re QuickRent, an online rental solution for all your gadget needs.
            </p>
            <p className="mt-4 text-gray-600 text-[17px]  md:text-xl">
              Why renting, you ask? Well, because we understand that unnecessary gadget costs aren’t always the best investment options. So we came up with an easier solution instead. We provide more than online rental services – we help you explore a world of possibilities. With our assured quality and prompt services, you can say goodbye to all the hassles that come with buying and say hello to convenience.
            </p>
          </div>
        </div>
        <div className="about-achive">
          <section className="py-5 md:py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
              <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                  <div className="md:pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                    <img
                      className="rounded-xl object-cover hidden md:inline"
                      src="./images/About/5.jpg"
                      alt="about Us image"
                    />
                  </div>
                  <img
                    className="sm:ml-0 ml-auto rounded-xl  object-cover hidden md:inline"
                    src="./images/About/6.jpg"
                    alt="about Us image"
                  />
                </div>
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                  <div className="w-full flex-col justify-center items-start gap-8 flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                        The Tale of Our Achievement Story
                      </h2>
                      <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                        Our journey at QuickRent is a reflection of collaboration and determination. As a team, we've navigated challenges, celebrated milestones, and built a story of growth and success in the world of gadget rentals.
                      </p>
                    </div>
                    <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                      <div className="flex-col justify-start items-start inline-flex">
                        <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">5+</h3>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                      </div>
                      <div className="flex-col justify-start items-start inline-flex">
                        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">2k+</h4>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Gadgets Rented</h6>
                      </div>
                      <div className="flex-col justify-start items-start inline-flex">
                        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">3k+</h4>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Happy Clients</h6>
                      </div>
                    </div>
                  </div>
                  <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-purple-500 rounded-md group">
                    <span
                      className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-purple-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                    >
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span
                      className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-purple-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                    >
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span
                      className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-purple-600 rounded-md group-hover:translate-x-0"
                    ></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      <a href="/gadgets">
                        Get Started
                      </a>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
