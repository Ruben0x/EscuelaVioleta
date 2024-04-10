import React from 'react';
import Layout from '../Components/Layout';
import Hero from '../Components/Home/Hero';
import ProfesoresGrid from '../Components/Profesores/ProfesoresGrid';

const Profesores = () => {
  return (
    <Layout>
      <Hero
        titulo2={'Profesores'}
        titulo={'Violeta'}
        boton={'Contrata tu clase'}
      />
      <ProfesoresGrid />
    </Layout>
  );
};

export default Profesores;
