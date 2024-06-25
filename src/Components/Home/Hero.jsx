import { useState } from 'react';
import heroImg from '../../img/heroImg.png';
import Button from '../Button';

const Hero = ({ titulo, titulo2, parrafo, boton, extraInfo }) => {
  const [extra, setExtra] = useState(extraInfo);

  return (
    <section className='mx-auto'>
      <div className='container flex flex-col md:flex-row justify-around px-4 md:px-7 py-10'>
        <div className='place-self-center w-full md:w-1/2 px-4 md:px-5 text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            {titulo2}
          </h1>
          <h1 className='text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-bold'>
            {titulo}
          </h1>
          <p className='my-6 px-4 md:px-0 md:pr-20'>{parrafo}</p>
          <Button title={boton} />
        </div>
        <div className='w-full md:w-2/3 mt-8 md:mt-0 flex justify-center'>
          <img src={heroImg} alt='imagen danza' className='w-full md:w-auto' />
        </div>
      </div>
      {extra && (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-yellow-400 pl-4 md:pl-16 mt-10'>
          <h3>Profesores Certificados</h3>
          <h3>Apoyo & Motivación</h3>
          <h3>Clases Personalizadas</h3>
        </div>
      )}
    </section>
  );
};

export default Hero;
