import React from 'react';
import Button from '../Button';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import bailemosGala from '../../img/bailemosGala.png';

const NuestraAcademia = () => {
  return (
    <>
      <section className='bg-white text-black px-4 md:px-10 py-10'>
        <div className='container mx-auto grid md:grid-cols-2 gap-6'>
          <div>
            <img src={bailemosGala} alt='Bailemos Gala' className='w-full' />
          </div>
          <div className='md:pl-10'>
            <h2 className='text-violet-600 text-2xl'>Nuestra academia</h2>
            <h1 className='font-bold text-4xl mt-4 md:mt-6'>
              Brindamos servicio desde 2023
            </h1>
            <p className='py-4 md:py-6'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus vel magni eligendi expedita dignissimos odit impedit.
              Dolorem quas expedita corporis est magni? Vero cupiditate libero
              corrupti eligendi soluta dolor deserunt!
            </p>
          </div>
        </div>
      </section>

      <section className='bg-white text-black px-4 md:px-10 py-10'>
        <div className='container mx-auto grid md:grid-cols-2 gap-6'>
          <div>
            <h2 className='text-violet-600 text-2xl'>Nuestra técnica</h2>
            <h1 className='font-bold text-4xl mt-4 md:w-2/3'>
              Unos sencillos pasos para enseñar a bailar.
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-full my-6 md:my-10'>
              <div className='w-full'>
                <Button title={'Paso 1'} />
              </div>
              <div className='w-full'>
                <Button title={'Paso 2'} />
              </div>
              <div className='w-full'>
                <Button title={'Paso 3'} />
              </div>
            </div>
            <p className='py-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem tenetur porro fugit numquam enim, quas similique ad
              suscipit dolorum!
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-6 md:my-10'>
              <CheckCircle text='Practica' />
              <CheckCircle text='Entrenamiento' />
              <CheckCircle text='Crecimiento' />
              <CheckCircle text='Constancia' />
              <CheckCircle text='Diversión' />
            </div>
          </div>
          <div className='self-center'>
            <div className='w-full h-full border-r-8 border-t-8 border-b-8 border-yellow-400'>
              <iframe
                width='100%'
                height='360'
                src='https://www.youtube.com/embed/tR_Z1LUDQuQ'
                title='Nutcracker Ballet - Full Performance - Live Ballet'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-violet-600 grid grid-cols-1 md:grid-cols-3 text-center px-4 md:px-8 py-8 divide-x divide-white'>
        <div>
          <h1 className='font-bold text-7xl'>15+</h1>
          <h2 className='font-bold text-4xl'>Clases</h2>
        </div>
        <div>
          <h1 className='font-bold text-7xl'>10+</h1>
          <h2 className='font-bold text-4xl'>Profesores</h2>
        </div>
        <div>
          <h1 className='font-bold text-7xl'>560+</h1>
          <h2 className='font-bold text-4xl'>Amigos</h2>
        </div>
      </section>

      <section className='bg-white text-black px-4 md:px-10 py-10'>
        <div className='container mx-auto grid md:grid-cols-2 gap-10'>
          <div>
            <h1 className='font-bold text-4xl text-violet-500 py-5'>
              Nuestra Misión
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit optio molestiae obcaecati, repellat accusamus nisi
              ad earum quia. Vero amet iure, iste illum praesentium aut sit
              architecto nisi doloribus, nesciunt fuga culpa est pariatur enim.
              Vel deleniti quia excepturi autem voluptatem cum vitae, aliquam,
              voluptatum expedita quo natus ut repellat corporis sint fugit
              possimus? Dignissimos repellendus sint excepturi dolorem similique
              non numquam aliquam ipsam perspiciatis totam perferendis nemo
              voluptas asperiores, voluptatum aperiam earum eligendi quas sed!
              Nulla et officia mollitia repellat inventore magnam, recusandae
              est doloremque iusto ducimus sapiente delectus expedita adipisci.
              Blanditiis quaerat vero unde quis mollitia laudantium ea?
            </p>
          </div>
          <div>
            <h1 className='font-bold text-4xl text-violet-500 py-5'>
              Nuestra Visión
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit optio molestiae obcaecati, repellat accusamus nisi
              ad earum quia. Vero amet iure, iste illum praesentium aut sit
              architecto nisi doloribus, nesciunt fuga culpa est pariatur enim.
              Vel deleniti quia excepturi autem voluptatem cum vitae, aliquam,
              voluptatum expedita quo natus ut repellat corporis sint fugit
              possimus? Dignissimos repellendus sint excepturi dolorem similique
              non numquam aliquam ipsam perspiciatis totam perferendis nemo
              voluptas asperiores, voluptatum aperiam earum eligendi quas sed!
              Nulla et officia mollitia repellat inventore magnam, recusandae
              est doloremque iusto ducimus sapiente delectus expedita adipisci.
              Blanditiis quaerat vero unde quis mollitia laudantium ea?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const CheckCircle = ({ text }) => (
  <div className='flex flex-row items-center'>
    <IconContext.Provider value={{ color: 'rgb(109 40 217)' }}>
      <FaRegCheckCircle />
    </IconContext.Provider>
    <h1 className='ml-5'>{text}</h1>
  </div>
);

export default NuestraAcademia;
