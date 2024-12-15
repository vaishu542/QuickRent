import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-purple-400 "
      style={
        {
          boxShadow: 'var(--shadow)'
        }
      }>
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">QuickRent</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center justify-center text-lg">
          <ul className='flex  w-[300px] justify-between'>
            <li >
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'text-gray-900' : 'hover:text-gray-900')}
              >
                Home
              </NavLink>
            </li >


            <li>
              <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? 'text-gray-900' : 'hover:text-gray-900')}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/gadgets'
                className={({ isActive }) => (isActive ? 'text-gray-900' : 'hover:text-gray-900')}
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/contact'
                className={({ isActive }) => (isActive ? 'text-gray-900' : 'hover:text-gray-900')}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
