import React from 'react';
import Layout from '../Components/Layout';
import Hero from '../Components/Home/Hero';
import HorarioClases from '../Components/Horario/HorarioClases';
import Button from '../Components/Button';

const Horario = () => {
  return (
    <Layout>
      <Hero
        boton={'Contrata tu clase'}
        titulo={'Violeta'}
        titulo2={'Calendario'}
      />
      <HorarioClases />
      <div className='pb-10 mx-auto'>
        <Button title={'Contrata tu clase'} />
      </div>
    </Layout>
  );
};

export default Horario;
