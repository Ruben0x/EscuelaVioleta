import React, { useState } from 'react';
import logoVioleta from '../img/logoVioleta.png';
import { Link } from 'react-router-dom';
import NavLinks from './Navbar/NavLinks';
import Button from './Button';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='bg-black '>
      <div className='flex items-center font-medium justify-around px-4'>
        <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
          <img
            src={logoVioleta}
            alt='Violeta Logo'
            className='md:cursor-pointer h-10'
          />
          <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>
        <ul className='md:flex hidden uppercase items-center gap-0'>
          <li>
            <Link
              to={'/'}
              className='py-7 px-3 inline-block hover:text-yellow-400'
            >
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className='md:block hidden'>
          <Button title={'Registra tu Clase'} />
        </div>
      </div>
      {/* MOBILE NAV  */}
      <ul
        className={`md:hidden bg-black absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
          open ? 'left-0' : 'left-[-100%]'
        } `}
      >
        <li>
          <Link to={'/'} className='py-7 px-3 inline-block '>
            Home
          </Link>
          <NavLinks />
          <div className='py-5'>
            <Button title={'Registra tu Clase'} />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
