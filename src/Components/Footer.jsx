import violetaWhite from '../img/violetaWhite.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-[#161921] flex flex-col justify-center relative mt-auto pb-20'>
      <div className='container mx-auto w-auto p-5'>
        <img className='max-w-64' src={violetaWhite} alt='' />
      </div>
      <div className='hidden container mx-auto justify-center text-white md:flex'>
        <div className='py-5 px-5 md:flex gap-3 border-b-2 border-t-2 border-yellow-400'>
          <Link
            to={'/'}
            className='text-base font-medium text-white hover:text-yellow-400'
          >
            HOME
          </Link>
          <Link
            to={'/acerca'}
            className='text-base font-medium text-white hover:text-yellow-400'
          >
            ACERCA
          </Link>
          <Link
            to={'/clases'}
            className='text-base font-medium text-white hover:text-yellow-400'
          >
            CLASES
          </Link>
          <Link
            to={'/horario'}
            className='text-base font-medium text-white hover:text-yellow-400'
          >
            HORARIO
          </Link>
          <Link
            to={'/precios'}
            className='text-base font-medium text-white hover:text-yellow-400'
          >
            PRECIOS
          </Link>
          <Link
            to={'/'}
            className='text-base font-medium text-white hover:text-yellow-400'
          >
            PROFESORES
          </Link>
          <Link
            to={'/'}
            className='text-base font-medium text-white hover:text-yellow-400'
          >
            CONTACTANOS
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
