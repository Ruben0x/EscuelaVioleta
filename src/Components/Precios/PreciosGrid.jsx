import React from 'react';
import PreciosCard from './PreciosCard';

const PreciosGrid = () => {
  return (
    <div className='bg-white'>
      <div className='grid grid-cols-3 mx-auto gap-20 text-center px-16 py-10 lg:container lg:gap-30 lg:h-[600px]'>
        <PreciosCard />
        <PreciosCard />
        <PreciosCard />
      </div>
    </div>
  );
};

export default PreciosGrid;
