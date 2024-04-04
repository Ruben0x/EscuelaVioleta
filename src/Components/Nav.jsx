import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <span className='text-white'>Logo</span>
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                >
                  About
                </a>
                <a
                  href='#'
                  className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Services
                </a>
                <div className='relative'>
                  <button
                    onClick={toggleMenu}
                    className='text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none'
                  >
                    Dropdown
                  </button>
                  {isOpen && (
                    <div className='absolute origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div className='py-1'>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          Option 1
                        </a>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          Option 2
                        </a>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          Option 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white hover:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none'
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <a
            href='#'
            className='text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Home
          </a>
          <a
            href='#'
            className='text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            About
          </a>
          <a
            href='#'
            className='text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Services
          </a>
          <div className='relative'>
            <button
              onClick={toggleMenu}
              className='text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none'
            >
              Dropdown
            </button>
            {isOpen && (
              <div className='absolute origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Option 1
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Option 2
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    Option 3
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
