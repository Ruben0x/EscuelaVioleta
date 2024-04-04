import useState from 'react';
import { Link } from 'react-router-dom';
import logoVioleta from '../img/logoVioleta.png';

import React from 'react';

const navigationData = ['Home', 'About', 'Contact'];

const toggleNav = () => {
  const nav = document.getElementById('nav');

  nav.classList.toggle('hidden');
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  // const [openNav, setOpenNav] = useState(false);
  const toggleAvatarDropdown = () => {
    setOpenAvatarDropdown(!openAvatarDropdown);
  };

  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);
  const navList = () => {
    return navigationData.map((item, index) => (
      <li key={index}>
        <a
          href='#'
          className={`block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
            item === 'Home' &&
            'bg-blue-500 border-b-2 border-gray-900 text-sm text-gray-900 py-3 px-5 rounded-lg font-medium tracking-wide leading-none'
          }`}
          aria-current={item === 'Home' ? 'page' : undefined}
        >
          {item}
        </a>
      </li>
    ));
  };
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight'>Logo</span>
      </div>

      <div className='block lg:hidden'>
        <button
          onClick={toggleNav}
          className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>

            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z' />
          </svg>
        </button>
      </div>

      <div
        className={`${
          openNav ? '' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        id='nav'
      >
        <div className='text-sm lg:flex-grow'>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Docs
          </a>

          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Examples
          </a>

          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
          >
            Blog
          </a>
        </div>

        <div>
          <button
            onClick={toggleAvatarDropdown}
            className='flex items-center px-3 py-2 border rounded text-teal-200border-teal-400 hover:text-white hover:border-white'
          >
            <img
              src='https://cdn.iconscout.com/icon/free/png-256/avatar-373-458339.png'
              alt='avatar'
              className='w-8 h-8 rounded-full'
            />

            <span className='ml-2'>John Doe</span>

            <svg
              className={`${
                openAvatarDropdown ? 'rotate-180' : ''
              } fill-current h-4 w-4 ml-2`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.657 6.586 4.293 8l1.414 1.414L10 13.172l4.293-4.293z' />
            </svg>
          </button>

          <div
            className={`${
              openAvatarDropdown ? 'block' : 'hidden'
            } absolute right-0 z-10 w-48 mt-3 origin-top-right bg-white rounded-md shadow-lg`}
          >
            <div
              className='py-1 rounded-md bg-white shadow-xs'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                role='menuitem'
              >
                Your Profile
              </a>

              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                role='menuitem'
              >
                Settings
              </a>

              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                role='menuitem'
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
