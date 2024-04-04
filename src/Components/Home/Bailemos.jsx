import React from 'react';
import bailemosGala from '../../img/bailemosGala.png';

const Bailemos = () => {
  return (
    <>
      <div className='container flex mx-auto justify-around px-10'>
        <div className='place-self-center w-1/2 px-5'>
          <div>
            <h2 className=''>Bailemos</h2>
            <h1 className='text-yellow-400 text-4xl font-bold ml-10'>
              Lorem Ipsum
            </h1>
          </div>
          <p className='my-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eius earum ad iure quaerat assumenda.
          </p>
          <button className='bg-violet-500 w-44 rounded-md py-3 font-semibold'>
            Saber mas...
          </button>
        </div>
        <div className=' w-1/2'>
          <img
            className='w-3/4 mx-auto border-2 rounded-3xl m-8 p-4 border-purple-600'
            src={bailemosGala}
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default Bailemos;
