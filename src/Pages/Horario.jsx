import React from 'react';
import Layout from '../Components/Layout';
import Hero from '../Components/Home/Hero';
import HorarioClases from '../Components/Horario/HorarioClases';

const Horario = () => {
  return (
    <Layout>
      <Hero
        boton={'Contrata tu clase'}
        titulo={'Violeta'}
        titulo2={'Calendario'}
      />
      <HorarioClases />
      <button className='bg-violet-500 w-44 rounded-md py-3 font-semibold self-center'>
        {' '}
        Contrata tu clase
      </button>
    </Layout>
  );
};

export default Horario;
