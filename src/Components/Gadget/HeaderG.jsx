import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderG = () => {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        laptop: false,
        watches: false,
        smartDevices: false,
        earbuds: false,
    });


    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Select Category');


    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };


    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: checked,
        }))
    };

    const handleNavigate = (link) => {
        navigate(`/${link}`);
    };


    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center">
                <div>
                    <p className='text-lg tracking-wide font-medium' >
                        Explor Our Products
                    </p>
                </div>
                {/* Category Dropdown */}
                <div className="relative inline-block text-left ml-auto">
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base"
                    >
                        {selectedCategory}
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>

                    {dropdownVisible && (
                        <div className="dropdown-menu absolute bg-white shadow-md rounded-md mt-2 w-48 py-2 z-50">
                            <div className="px-4 py-2">
                                <div className="mb-2">
                                    <label className="flex items-center">
                                        <button
                                            type="checkbox"
                                            name="laptop"
                                            checked={filters.laptop}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                            onClick={() => handleNavigate("laptops")}
                                        >
                                            Laptop
                                        </button>

                                    </label>
                                </div>
                                <div className="mb-2">
                                    <label className="flex items-center"  >
                                        <button
                                            name="watches"
                                            checked={filters.watches}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                            onClick={() => handleNavigate("watchs")}
                                        >

                                            Watches
                                        </button>
                                    </label>
                                </div>
                                <div className="mb-2">
                                    <label className="flex items-center">
                                        <button
                                            type="checkbox"
                                            name="smartDevices"
                                            checked={filters.smartDevices}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                            onClick={() => handleNavigate("smartdevices")}
                                        >
                                            Smart Devices
                                        </button>
                                    </label>
                                </div>
                                <div className="mb-2">
                                    <label className="flex items-center">
                                        <button
                                            type="checkbox"
                                            name="earbuds"
                                            checked={filters.earbuds}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                            onClick={() => handleNavigate("earbuds")}
                                        >
                                            Earbuds
                                        </button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* Cart Icon */}
                <a href="/cart" className="ml-5 flex items-center bg-gray-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag w-6 h-6 text-gray-900 hover:text-indigo-500">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>

                </a>
            </div>
        </header>
    );
};

export default HeaderG;
