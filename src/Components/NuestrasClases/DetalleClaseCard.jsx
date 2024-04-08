import React from 'react';
import { MdAccessTimeFilled } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FaRegCalendarDays } from 'react-icons/fa6';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

const DetalleClaseCard = () => {
  return (
    <div className='w-72 h-64 border-2 border-yellow-400 rounded-xl p-4 bg-white text-black absolute -left-5'>
      <h1 className='font-bold text-xl border-b-2 px-3 py-2'>
        Detalle de la Clase
      </h1>
      <ul className=''>
        <li className='flex center items-center py-1'>
          <IconContext.Provider value={{ color: 'rgb(124 58 237)' }}>
            <MdAccessTimeFilled />
          </IconContext.Provider>
          <p className='pl-1'>
            <span className='font-bold'>Duracion: </span>1hr
          </p>
        </li>
        <li className='flex center items-center py-1'>
          <IconContext.Provider value={{ color: 'rgb(124 58 237)' }}>
            <FaUser />
          </IconContext.Provider>
          <p className='pl-1'>
            <span className='font-bold'>Estudiantes: </span>20
          </p>
        </li>
        <li className='flex center items-center py-1 '>
          <IconContext.Provider value={{ color: 'rgb(124 58 237)' }}>
            <FaRegCalendarDays />
          </IconContext.Provider>
          <p className='pl-1'>
            <span className='font-bold'> Dia: </span>Lunes
          </p>
        </li>
        <li className='flex center items-center py-1'>
          <IconContext.Provider value={{ color: 'rgb(124 58 237)' }}>
            <RiMoneyDollarCircleFill />
          </IconContext.Provider>
          <p className='pl-1'>
            <span className='font-bold'>Precio: </span>$00.00
          </p>
        </li>
        <li className='flex center items-center p-1'>
          <IconContext.Provider value={{ color: 'rgb(124 58 237)' }}>
            <FaUser />
          </IconContext.Provider>
          <p className='pl-1'>
            <span className='font-bold'>Profesor(a): </span>Paulina González
          </p>
        </li>
      </ul>
    </div>
  );
};

export default DetalleClaseCard;
