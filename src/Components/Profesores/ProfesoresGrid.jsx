import React from 'react';
import { listaProfesores } from '../../utils/utils';
import ProfesorCard from './ProfesorCard';
import Button from '../Button';

const ProfesoresGrid = () => {
  const profesores = listaProfesores;
  return (
    <section className='mx-auto'>
      <div className='container flex flex-col p-10'>
        <div className='mx-auto my-10'>
          <h1 className='text-4xl'>Profesores</h1>
          <h2 className='text-yellow-400 font-bold text-6xl text-right'>
            2024
          </h2>
        </div>
        <div className='grid grid-cols-4 gap-5'>
          {profesores.map((profesor) => (
            <ProfesorCard item={profesor} key={profesor.id} />
          ))}
        </div>
        <div className='my-10 mx-auto'>
          <Button title={'Inscríbete'} />
        </div>
      </div>
    </section>
  );
};

export default ProfesoresGrid;
