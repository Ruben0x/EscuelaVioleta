import React from 'react';
import Hero from '../Components/Home/Hero';
import Layout from '../Components/Layout';
import DetalleClaseCard from '../Components/NuestrasClases/DetalleClaseCard';
import bailemosGala from '../img/bailemosGala.png';

const ClaseDetalle = () => {
  return (
    <Layout>
      <Hero
        titulo={'Contemporánea'}
        boton={'Contrata tu clase'}
        titulo2={'Danza'}
      />
      <section className='bg-white text-black'>
        <div className='container mx-auto'>
          <div className='container flex ml-0 h-[420px] py-10 px-20'>
            <img
              src={bailemosGala}
              alt=''
              className='shadow-[20px_-20px_0_0_rgba(250,204,21,1)] rounded-2xl'
            />
          </div>

          <div className='container flex mx-auto justify-around p-10'>
            <div className='w-1/2'>
              <h1 className='text-violet-500 font-bold text-2xl pb-5'>
                Danza Contemporanea
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                porro excepturi iusto, assumenda non aliquid impedit saepe est
                inventore, architecto delectus laudantium consequuntur odio
                dolore in quisquam eveniet! Porro, quasi! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Itaque porro excepturi
                iusto, assumenda non aliquid impedit saepe est inventore,
                architecto delectus laudantium consequuntur odio dolore in
                quisquam eveniet! Porro, quasi!
              </p>
            </div>
            <div className='bg-black p-5 rounded-lg relative w-72 h-72'>
              {/* <div className='bg-black p-5 rounded-lg relative w-72 h-72'> */}
              <DetalleClaseCard />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClaseDetalle;
