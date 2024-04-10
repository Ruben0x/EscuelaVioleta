import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

export const NuestrasClasesCard = ({ clase }) => {
  const { imagen, titulo, descripcion, id } = clase;
  return (
    <div className='bg-white text-black rounded-2xl p-4 border-2 border-yellow-400 '>
      <div className='pb-3'>
        <img src={imagen} alt='' />
      </div>
      <div className='text-center'>
        <h1 className='text-violet-600 text-2xl pb-5 h-20'>{titulo}</h1>
        <p className='pb-5'>{descripcion}</p>
        <Link to={'/clases/' + id}>
          <Button title={'Ver Detalles'} />
        </Link>
      </div>
    </div>
  );
};
