import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './Navbar/NavLinks';
import Button from './Button';
import logoVioleta from '../img/logoVioleta.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-black fixed top-0 left-0 w-full z-50 h-16'>
      <div className='flex items-center justify-between px-5 py-4 h-full'>
        <div className='flex items-center'>
          <img
            src={logoVioleta}
            alt='Violeta Logo'
            className='h-10 cursor-pointer'
          />
        </div>
        <div className='hidden md:flex items-center space-x-6'>
          <Link to='/' className='py-2 pl-4 hover:text-yellow-400'>
            Home
          </Link>
          <NavLinks />
        </div>
        <div className='hidden md:block'>
          <Button title={'Registra tu Clase'} />
        </div>
        <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
          <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
        </div>
      </div>
      {/* MOBILE NAV */}
      <ul
        className={`md:hidden bg-black fixed w-full h-full top-0 left-0 transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className='flex flex-col items-center justify-center h-full space-y-8'>
          <li className='w-full text-center'>
            <Link
              to='/'
              className='block py-2 px-4 hover:text-yellow-400'
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <NavLinks onClick={() => setOpen(false)} />
          <div>
            <Button
              title={'Registra tu Clase'}
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
