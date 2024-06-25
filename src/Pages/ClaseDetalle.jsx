import React, { useEffect, useState } from 'react';
import Hero from '../Components/Home/Hero';
import Layout from '../Components/Layout';
import DetalleClaseCard from '../Components/NuestrasClases/DetalleClaseCard';
import { useParams } from 'react-router-dom';
import { clasesDeDanza } from '../utils/utils';

const ClaseDetalle = () => {
  const params = useParams();
  const [clase, setClase] = useState('');
  const listaClases = clasesDeDanza;

  const result = listaClases.find((clase) => clase.id == params.id);

  useEffect(() => {
    setClase(result);
  }, [result]);

  return (
    <Layout>
      <Hero
        titulo={clase.titulo}
        boton={'Contrata tu clase'}
        titulo2={clase.titulo2}
      />
      <section className='bg-white text-black'>
        <div className='container mx-auto'>
          <div className='mx-auto max-w-screen-xl'>
            <div className='flex flex-col md:flex-row'>
              <div className='md:w-1/2'>
                <div className='container flex h-[420px] py-10 px-20'>
                  <img
                    src={clase.imagen}
                    alt=''
                    className='shadow-[20px_-20px_0_0_rgba(250,204,21,1)] rounded-2xl w-full object-cover'
                  />
                </div>
              </div>
              <div className='md:w-1/2 px-6 py-10'>
                <h1 className='text-violet-500 font-bold text-2xl pb-5'>
                  {clase.titulo}
                </h1>
                <p className='mb-5'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque porro excepturi iusto, assumenda non aliquid impedit
                  saepe est inventore, architecto delectus laudantium
                  consequuntur odio dolore in quisquam eveniet! Porro, quasi!
                </p>
                <div className='bg-black p-5 rounded-lg relative w-72 h-72 flex items-center justify-center md:justify-start'>
                  <DetalleClaseCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClaseDetalle;
