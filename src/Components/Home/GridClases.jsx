import React from 'react';
import ClaseCard from './ClaseCard';
import { clasesDeDanza } from '../../utils/utils';

const GridClases = () => {
  const listaClases = clasesDeDanza;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-10'>
      {listaClases.map((clase) => (
        <ClaseCard img={clase.imagen} titulo={clase.titulo} key={clase.id} />
      ))}
    </div>
  );
};

export default GridClases;
