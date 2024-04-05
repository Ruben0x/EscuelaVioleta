import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    { name: 'Acerca', route: '/acerca' },
    { name: 'Clases', route: '/clases' },
    { name: 'Horario', route: '/horario' },
    { name: 'Precios', route: '/precios' },
    { name: 'Profesores', route: '/profesores' },
    { name: 'Contactanos', route: '/contactanos' },
  ];
  return (
    <>
      {links.map((link, index) => (
        <div key={index} className='px-3 text-left md:cursor-pointer hover:'>
          <Link to={link.route} className='py-7 hover:text-yellow-400'>
            {link.name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
