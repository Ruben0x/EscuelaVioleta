import React from 'react';
import Layout from '../Components/Layout';
import Hero from '../Components/Home/Hero';
import PreciosGrid from '../Components/Precios/PreciosGrid';

const Precios = () => {
  return (
    <Layout>
      <Hero
        titulo2={'Precios de'}
        titulo={'CURSOS'}
        boton={'Contrata tu clase'}
      />
      <PreciosGrid />
    </Layout>
  );
};

export default Precios;
