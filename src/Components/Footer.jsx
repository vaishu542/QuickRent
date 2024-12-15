import React from 'react';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-purple-400">
            <div className="container px-5 pt-7 pb-1 mx-auto ">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    {["QUICKSTART", "POLICES", "INFORMATION"].map((title, index) => (
                        <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                {title}
                            </h2>
                            <nav className="list-none mb-10 text-gray-700">
                                {index === 0 ? (
                                    ["Home", "About", "Gadget", "Contact"].map((link, idx) => (
                                        <li key={idx}>
                                            <a href="#" className=" hover:text-gray-800">
                                                {link}
                                            </a>
                                        </li>
                                    ))
                                ) : index === 1 ? (
                                    ["Terms", "Privacy Policy", "License", "Support"].map((link, idx) => (
                                        <li key={idx}>
                                            <a href="#" className=" hover:text-gray-800">
                                                {link}
                                            </a>
                                        </li>
                                    ))
                                ) : (
                                    ["FAQ", "Help Center", "Community", "Feedback"].map((link, idx) => (
                                        <li key={idx}>
                                            <a href="#" className=" hover:text-gray-800">
                                                {link}
                                            </a>
                                        </li>
                                    ))

                                )}
                            </nav>
                        </div>
                    ))}

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-center">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 ">
                            JOIN US
                        </h2>

                        <div className="contact-me w-[180px]">
                            <div className="icons my-6 flex justify-between items-center">
                                <a className=' hover:scale-110'>
                                    <img src="./images/Footer/twitter.svg" alt="" />
                                </a>
                                <a className=' hover:scale-110'>
                                    <img src="./images/Footer/linkedin.svg" alt="" />
                                </a>
                                <a className=' hover:scale-110'>
                                    <img src="./images/Footer/instagram.svg" alt="" />
                                </a>
                                <a className=' hover:scale-110'>
                                    <img src="./images/Footer/facebook.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-purple-400">
                <div className="container px-5 py-4 mx-auto flex items-center justify-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="ml-3 text-xl">QuickRent</span>
                    </a>
                    <p className="text-sm text-gray-750 sm:ml-6 sm:mt-0 mt-4">
                        © 2024 QuickRent —
                        <a
                            href="https://twitter.com/knyttneve"
                            rel="noopener noreferrer"
                            className="text-gray-750 ml-1"
                            target="_blank"
                        >
                            @quickrent
                        </a>
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
