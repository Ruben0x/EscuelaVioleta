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

  const result = profesores.filter((prof) => prof.id == params.id);
  useEffect(() => {
    setProfesor(result[0]);
    console.log(profesor);
  }, []);

  return (
    <Layout>
      <Hero
        titulo2={'Profesores'}
        titulo={'Violeta'}
        boton={'Contrata tu clase'}
      />
      <section className='bg-white py-10'>
        <div className='flex flex-row container'>
          <div className='w-1/2'>
            <img src={profesorFoto} alt='' className='w-60 mx-auto' />
          </div>
          <div className='w-1/2 text-black'>
            <div>
              <h1 className='font-semibold text-3xl'>{profesor.nombre}</h1>
              <p>Profesor(a) de {profesor.clase}</p>
              <p>{profesor.descripción}</p>
            </div>
            <div>
              <h1 className='font-semibold text-3xl my-5'>Contacto</h1>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 gri'>
                <div className='flex items-center'>
                  <div className='mr-3'>
                    <IconContext.Provider
                      value={{ color: 'rgb(109 40 217)', size: '3em' }}
                    >
                      <IoPersonCircleOutline />
                    </IconContext.Provider>
                  </div>
                  <div>
                    <p>Experiencia</p>
                    <p>{profesor.experiencia}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='mr-3'>
                    <IconContext.Provider
                      value={{ color: 'rgb(109 40 217)', size: '3em' }}
                    >
                      <GiSmartphone />
                    </IconContext.Provider>
                  </div>
                  <div>
                    <p>Teléfono</p>
                    <p>{profesor.telefono}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='mr-3'>
                    <IconContext.Provider
                      value={{ color: 'rgb(109 40 217)', size: '3em' }}
                    >
                      <IoMdMail />
                    </IconContext.Provider>
                  </div>
                  <div>
                    <p>Email</p>
                    <p>{profesor.email}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='mr-3'>
                    <IconContext.Provider
                      value={{ color: 'rgb(109 40 217)', size: '3em' }}
                    >
                      <IoShareSocial />
                    </IconContext.Provider>
                  </div>
                  <div>
                    <p>Social Link</p>
                    <div className='flex'>
                      <div>
                        <TiSocialFacebook />
                      </div>
                      <div>
                        <AiFillInstagram />
                      </div>
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
