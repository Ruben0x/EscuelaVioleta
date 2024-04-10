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

  const result = listaClases.filter((clase) => clase.id == params.id);

  useEffect(() => {
    // console.log(clase[0].titulo);
    setClase(result[0]);
    console.log(clase);
  }, []);

  return (
    <Layout>
      <Hero
        titulo={clase.titulo}
        boton={'Contrata tu clase'}
        titulo2={clase.titulo2}
      />
      <section className='bg-white text-black'>
        <div className='container mx-auto'>
          <div className='container flex ml-0 h-[420px] py-10 px-20'>
            <img
              src={clase.imagen}
              alt=''
              className='shadow-[20px_-20px_0_0_rgba(250,204,21,1)] rounded-2xl'
            />
          </div>

          <div className='container flex mx-auto justify-around p-10'>
            <div className='w-1/2'>
              <h1 className='text-violet-500 font-bold text-2xl pb-5'>
                {clase.titulo}
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
