import React from 'react';
import Button from '../Button';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const NuestraAcademia = () => {
  return (
    <>
      <section className='bg-white text-black px-10 py-10 '>
        <div className='container grid grid-cols-2 gap-3 mx-auto'>
          <div className=''>
            <img src='' alt='' />
          </div>
          <div className=''>
            <h2 className='text-violet-600 text-2xl'>Nuestra academia</h2>
            <h1 className='font-bold text-4xl'>
              Brindamos servicio desde 2023
            </h1>
            <p className='py-10'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus vel magni eligendi expedita dignissimos odit impedit.
              Dolorem quas expedita corporis est magni? Vero cupiditate libero
              corrupti eligendi soluta dolor deserunt!
            </p>
          </div>

          <div>
            <h2 className='text-violet-600 text-2xl'>Nuestra técnica</h2>
            <h1 className='font-bold text-4xl w-2/3'>
              Unos sencillos pasos para enseñar a bailar.
            </h1>
            <div className='grid grid-cols-3 w-full my-10'>
              <div className=' text-lg lg:text-4xl w-full'>
                <Button title={'Paso 1'} />
              </div>
              <div className='text-lg lg:text-4xl w-full'>
                <Button title={'Paso 2'} />
              </div>
              <div className='text-lg lg:text-4xl w-full'>
                <Button title={'Paso 3'} />
              </div>
            </div>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem tenetur porro fugit numquam enim, quas similique ad
              suscipit dolorum!
            </p>

            <div className='grid grid-cols-3 gap-3 my-10'>
              <div className='flex flex-row items-center'>
                <IconContext.Provider value={{ color: 'rgb(109 40 217)' }}>
                  <FaRegCheckCircle />
                </IconContext.Provider>
                <h1 className='ml-5'>Practica</h1>
              </div>
              <div className='flex flex-row items-center'>
                <IconContext.Provider value={{ color: 'rgb(109 40 217)' }}>
                  <FaRegCheckCircle />
                </IconContext.Provider>
                <h1 className='ml-5'>Entrenamiento</h1>
              </div>
              <div className='flex flex-row items-center'>
                <IconContext.Provider value={{ color: 'rgb(109 40 217)' }}>
                  <FaRegCheckCircle />
                </IconContext.Provider>
                <h1 className='ml-5'>Crecimiento</h1>
              </div>
              <div className='flex flex-row items-center'>
                <IconContext.Provider value={{ color: 'rgb(109 40 217)' }}>
                  <FaRegCheckCircle />
                </IconContext.Provider>
                <h1 className='ml-5'>Constancia</h1>
              </div>
              <div className='flex flex-row items-center'>
                <IconContext.Provider value={{ color: 'rgb(109 40 217)' }}>
                  <FaRegCheckCircle />
                </IconContext.Provider>
                <h1 className='ml-5'>Diversión</h1>
              </div>
              {/* <div className='flex flex-row items-center'>
      <IconContext.Provider value={{ color: 'rgb(109 40 217)' }}>
        <FaRegCheckCircle />
      </IconContext.Provider>
      <h1 className='ml-5'>Practica</h1>
    </div> */}
            </div>
          </div>
          <div className='self-center'>
            <div className='w-full h-full border-r-8 border-t-8 border-b-8 border-yellow-400'>
              <iframe
                width='100%'
                height='360'
                src='https://www.youtube.com/embed/tR_Z1LUDQuQ'
                title='Nutcracker Ballet - Full Performance - Live Ballet'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerpolicy='strict-origin-when-cross-origin'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <div className='bg-violet-600 grid grid-cols-3 text-center px-8 py-8 divide-x divide-white'>
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
      </div>
      <div className='bg-white text-black px-10 py-10'>
        <div className='grid grid-cols-2 gap-10 mx-auto lg:w-5/6'>
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
      </div>
    </>
  );
};

export default NuestraAcademia;
