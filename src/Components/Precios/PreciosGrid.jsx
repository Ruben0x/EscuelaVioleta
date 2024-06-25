import React from 'react';
import PreciosCard from './PreciosCard';

const PreciosGrid = () => {
  return (
    <div className='bg-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:container mx-auto px-4 py-10 lg:py-16'>
        {/* Tarjeta de precios 1 */}
        <div className='flex justify-center'>
          <PreciosCard />
        </div>

        {/* Tarjeta de precios 2 */}
        <div className='flex justify-center'>
          <PreciosCard />
        </div>

        {/* Tarjeta de precios 3 */}
        <div className='flex justify-center'>
          <PreciosCard />
        </div>
      </div>
    </div>
  );
};

export default PreciosGrid;
