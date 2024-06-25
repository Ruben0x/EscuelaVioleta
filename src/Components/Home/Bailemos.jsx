import React from 'react';
import bailemosGala from '../../img/bailemosGala.png';

const Bailemos = () => {
  return (
    <>
      <div className='container mx-auto px-4 py-7 flex flex-col lg:flex-row justify-around'>
        <div className='place-self-center lg:w-1/2 px-5'>
          <div>
            <h2 className='text-lg font-medium'>Bailemos</h2>
            <h1 className='text-yellow-400 text-3xl lg:text-4xl font-bold ml-5 lg:ml-10'>
              Lorem Ipsum
            </h1>
          </div>
          <p className='my-4 lg:my-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eius earum ad iure quaerat assumenda.
          </p>
          <button className='bg-violet-500 w-full lg:w-44 rounded-md py-3 font-semibold text-white hover:bg-violet-600'>
            Saber mas...
          </button>
        </div>
        <div className='w-full lg:w-1/2 mt-6 lg:mt-0'>
          <img
            className='mx-auto border-2 rounded-3xl m-4 p-4 border-purple-600'
            src={bailemosGala}
            alt='Bailemos Gala Event'
          />
        </div>
      </div>
    </>
  );
};

export default Bailemos;
