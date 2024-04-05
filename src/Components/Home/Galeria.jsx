import React from 'react';
import GridGaleria from './GridGaleria';

const Galeria = () => {
  return (
    <section className='text-center flex flex-col my-10 mx-auto'>
      <div className='w-1/3 self-center font-bold'>
        <h2 className='text-2xl -ml-20'>Galería</h2>
        <h1 className='text-yellow-400 text-4xl ml-20'>Bailemos</h1>
      </div>
      <div className='container my-10'>
        <GridGaleria />
      </div>
    </section>
  );
};

export default Galeria;
