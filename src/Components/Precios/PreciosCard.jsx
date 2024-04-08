import React from 'react';
import Button from '../Button';

const PreciosCard = () => {
  return (
    <div className='bg-black rounded-b-3xl'>
      <div className='py-5 bg-violet-500 '>
        <h1 className='font-bold uppercase text-5xl'>Clase Suelta</h1>
      </div>
      <div className='py-32'>
        <h1 className='font-bold uppercase text-5xl'>$7.000</h1>
      </div>
      <div className='py-5'>
        <Button title={'ELEGIR PLAN'} />
      </div>
    </div>
  );
};

export default PreciosCard;
