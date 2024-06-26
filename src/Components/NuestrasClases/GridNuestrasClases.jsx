import React from 'react';
import { clasesDeDanza } from '../../utils/utils';
import { NuestrasClasesCard } from './NuestrasClasesCard';

export const GridNuestrasClases = () => {
  const listaClases = clasesDeDanza;
  return (
    <section className='container mx-auto py-10'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        {listaClases.map((clase) => (
          <NuestrasClasesCard key={clase.id} clase={clase} />
        ))}
      </div>
    </section>
  );
};
