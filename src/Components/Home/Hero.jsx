import { useState } from 'react';
import heroImg from '../../img/heroImg.png';
import Button from '../Button';
// import heroImg from '../img/heroImg.png';

const Hero = ({ titulo, titulo2, parrafo, boton, extraInfo }) => {
  const [extra, setExtra] = useState(extraInfo);
  return (
    <section className='mx-auto'>
      <div className='container flex justify-around px-7 py-10'>
        <div className='place-self-center w-1/2 px-5'>
          <h1>{titulo2}</h1>
          <h1 className='text-yellow-400 text-5xl font-bold'>{titulo}</h1>
          <p className='pr-20 my-6'>{parrafo}</p>
          <Button title={boton} />
        </div>
        <div className='w-2/3'>
          <img src={heroImg} alt='imagen danza' />
        </div>
      </div>
      {extraInfo && (
        <div className='flex grid-flow-row gap-6 text-yellow-400 pl-16'>
          <h3>Profesores Certificados</h3>
          <h3>Apoyo & Motivación</h3>
          <h3>Clases Personalizadas</h3>
        </div>
      )}
    </section>
  );
};

export default Hero;
