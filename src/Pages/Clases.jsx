import React from 'react';
import Layout from '../Components/Layout';
import Hero from '../Components/Home/Hero';
import { GridNuestrasClases } from '../Components/NuestrasClases/GridNuestrasClases';

const Clases = () => {
  return (
    <Layout>
      <Hero
        titulo2={'Nuestras'}
        titulo={'Clases'}
        boton={'Contrata tu clase'}
      />
      <GridNuestrasClases />
    </Layout>
  );
};

export default Clases;
