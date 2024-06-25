import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { listaProfesores } from '../utils/utils';
import Hero from '../Components/Home/Hero';
import Layout from '../Components/Layout';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { GiSmartphone } from 'react-icons/gi';
import { IoShareSocial } from 'react-icons/io5';
import { TiSocialFacebook } from 'react-icons/ti';
import { AiFillInstagram } from 'react-icons/ai';

import profesorFoto from '../img/profesor.png';

const ProfesoresInfo = () => {
  const [profesor, setProfesor] = useState('');
  const profesores = listaProfesores;
  const params = useParams();

  const result = profesores.find((prof) => prof.id == params.id);

  useEffect(() => {
    setProfesor(result);
  }, [result]);

  if (!profesor) return null; // Handle case when professor is not found

  return (
    <Layout>
      <Hero
        titulo2={'Profesores'}
        titulo={'Violeta'}
        boton={'Contrata tu clase'}
      />
      <section className='bg-white py-10'>
        <div className='flex flex-col lg:flex-row container mx-auto'>
          <div className='lg:w-1/2'>
            <img
              src={profesorFoto}
              alt=''
              className='w-full lg:w-2/3 mx-auto mb-6 lg:mb-0'
            />
          </div>
          <div className='lg:w-1/2 text-black'>
            <div>
              <h1 className='font-semibold text-3xl'>{profesor.nombre}</h1>
              <p className='mb-4'>Profesor(a) de {profesor.clase}</p>
              <p>{profesor.descripción}</p>
            </div>
            <div className='mt-6'>
              <h1 className='font-semibold text-3xl mb-4'>Contacto</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex items-center'>
                  <IconContext.Provider
                    value={{ color: 'rgb(109 40 217)', size: '3em' }}
                  >
                    <IoPersonCircleOutline />
                  </IconContext.Provider>
                  <div className='ml-3'>
                    <p className='font-semibold'>Experiencia</p>
                    <p>{profesor.experiencia}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <IconContext.Provider
                    value={{ color: 'rgb(109 40 217)', size: '3em' }}
                  >
                    <GiSmartphone />
                  </IconContext.Provider>
                  <div className='ml-3'>
                    <p className='font-semibold'>Teléfono</p>
                    <p>{profesor.telefono}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <IconContext.Provider
                    value={{ color: 'rgb(109 40 217)', size: '3em' }}
                  >
                    <IoMdMail />
                  </IconContext.Provider>
                  <div className='ml-3'>
                    <p className='font-semibold'>Email</p>
                    <p>{profesor.email}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <IconContext.Provider
                    value={{ color: 'rgb(109 40 217)', size: '3em' }}
                  >
                    <IoShareSocial />
                  </IconContext.Provider>
                  <div className='ml-3'>
                    <p className='font-semibold'>Redes Sociales</p>
                    <div className='flex'>
                      <a
                        href={profesor.facebook}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <TiSocialFacebook className='mr-2 text-xl hover:text-blue-600 transition duration-300' />
                      </a>
                      <a
                        href={profesor.instagram}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <AiFillInstagram className='text-xl hover:text-pink-600 transition duration-300' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfesoresInfo;
