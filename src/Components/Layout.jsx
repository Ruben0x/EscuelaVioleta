import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col text-white h-screen w-screen'>
      <Navbar />
      {/* <Nav /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
