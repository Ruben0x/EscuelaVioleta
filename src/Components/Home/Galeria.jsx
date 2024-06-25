import React from 'react';
import GridGaleria from './GridGaleria';

const Galeria = () => {
  return (
    <section className='text-center flex flex-col my-10 mx-auto'>
      <div className='w-4/5 md:w-2/3 lg:w-1/3 self-center font-bold'>
        <h2 className='text-xl md:text-2xl lg:text-3xl mb-4'>Galería</h2>
        <h1 className='text-yellow-400 text-3xl md:text-4xl lg:text-5xl'>
          Bailemos
        </h1>
      </div>
      <div className='container my-10'>
        <GridGaleria />
      </div>
    </section>
  );
};

export default Galeria;
