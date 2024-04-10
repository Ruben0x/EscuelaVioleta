import React from 'react';
import profesor from '../../img/profesor.png';
import { Link } from 'react-router-dom';

const ProfesorCard = ({ item }) => {
  const { nombre, clase, descripción, teléfono, email, experiencia, id } = item;

  return (
    <div className='border-violet-500 border-2 rounded-2xl mx-auto p-5'>
      <div className=''>
        <Link to={'/profesores/' + id}>
          <img src={profesor} alt='' className='rounded-2xl w-60' />
        </Link>
      </div>
      <div className='text-center'>
        <h1 className='mb-3'>{nombre}</h1>
        <p className='text-yellow-400'>Profesor(a)</p>
        <h2 className='text-yellow-400 uppercase'>{clase}</h2>
      </div>
    </div>
  );
};

export default ProfesorCard;
