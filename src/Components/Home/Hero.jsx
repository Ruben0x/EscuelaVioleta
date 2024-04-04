import heroImg from '../../img/heroImg.png';
// import heroImg from '../img/heroImg.png';

const Hero = ({ titulo, titulo2, parrafo, boton }) => {
  return (
    <>
      <div className='container flex mx-auto justify-around px-10'>
        <div className='place-self-center w-1/2 px-5'>
          <h1>{titulo2}</h1>
          <h1 className='text-yellow-400 text-6xl font-bold'>{titulo}</h1>
          <p className='pr-20 my-6'>{parrafo}</p>
          <button className='bg-violet-500 w-44 rounded-md py-3 font-semibold'>
            {boton}
          </button>
        </div>
        <div className='w-1/2'>
          <img src={heroImg} alt='imagen danza' />
        </div>
      </div>
      <div className='flex grid-flow-row gap-6 text-yellow-400 pl-16'>
        <h3>Profesores Certificados</h3>
        <h3>Apoyo & Motivación</h3>
        <h3>Clases Personalizadas</h3>
      </div>
    </>
  );
};

export default Hero;
