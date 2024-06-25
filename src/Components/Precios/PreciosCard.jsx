import React from 'react';
import Button from '../Button';

const PreciosCard = () => {
  return (
    <div className='bg-black rounded-b-3xl shadow-lg'>
      <div className='py-5 bg-violet-500 text-center rounded-t-3xl'>
        <h1 className='font-bold uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white'>
          Clase Suelta
        </h1>
      </div>
      <div className='py-12 text-center'>
        <h1 className='font-bold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white'>
          $7.000
        </h1>
      </div>
      <div className='py-5 text-center'>
        <Button title={'ELEGIR PLAN'} />
      </div>
    </div>
  );
};

export default PreciosCard;
