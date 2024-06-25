import React from 'react';
import Button from '../Button';
import GridClases from './GridClases';

const NuestrasClases = () => {
  return (
    <section className='w-screen bg-[#161921]'>
      <div className='container mx-auto px-4 py-7'>
        <div className='flex flex-col lg:flex-row justify-between px-4 lg:px-10'>
          <div className='mb-6 lg:mb-0'>
            <h2 className='text-lg font-medium'>Nuestras Clases</h2>
            <h1 className='text-yellow-400 text-3xl lg:text-4xl font-bold ml-5 lg:ml-10'>
              Elige tu estilo de baile
            </h1>
            <p className='w-full lg:w-3/5 text-sm'>
              Lorem Ipsum ipsom lorem lorem ipsum ipso lorem, Lorem Ipsum ipsom
              lorem lorem ipsum ipso lorem
            </p>
          </div>
          <div className='self-center'>
            <Button title={'Ver todas las Clases'} />
          </div>
        </div>
        <div>
          <GridClases />
        </div>
      </div>
    </section>
  );
};

export default NuestrasClases;
