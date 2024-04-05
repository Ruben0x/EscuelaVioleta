import React from 'react';
import ClaseCard from './ClaseCard';
import Button from '../Button';
import GridClases from './GridClases';

const NuestrasClases = () => {
  return (
    <section className='w-screen bg-[#161921]'>
      <div className=' container mx-auto px-10 py-7'>
        <div className='flex w-full justify-between px-10'>
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
          <div className='self-center'>
            {/* <button className='bg-violet-500 w-44 rounded-md py-3 font-semibold'></button> */}
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
// container flex mx-auto justify-around px-10 py-7
