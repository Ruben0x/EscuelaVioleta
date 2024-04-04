import violetaWhite from '../img/violetaWhite.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-[#161921] flex flex-col justify-center relative mt-auto'>
      <div className='container mx-auto w-auto p-5'>
        <img className='max-w-64' src={violetaWhite} alt='' />
      </div>
      <div className='container mx-auto w-auto text-white flex gap-3 mb-10'>
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
    </footer>
  );
};

export default Footer;
