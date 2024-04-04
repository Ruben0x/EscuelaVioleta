import React from 'react';
import ClaseCard from './ClaseCard';

const NuestrasClases = () => {
  return (
    <div className='flex bg-[#161921] px-20 py-12'>
      <div className='flex w-full justify-between'>
        <div>
          <h2 className=''>Nuestras Clases</h2>
          <h1 className='text-yellow-400 text-4xl font-bold ml-10'>
            Elige tu estilo de baile
          </h1>
          <p className='w-3/5 text-sm'>
            Lorem Ipsum ipsom lorem lorem ipsum ipso lorem, Lorem Ipsum ipsom
            lorem lorem ipsum ipso lorem{' '}
          </p>
        </div>
        <div>
          <button className='bg-violet-500 w-44 rounded-md py-3 font-semibold'>
            Ver todas las Clases
          </button>
        </div>
      </div>
      <div>
        <ClaseCard />{' '}
      </div>
    </div>
  );
};

export default NuestrasClases;
