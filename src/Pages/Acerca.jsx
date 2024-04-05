import React from 'react';
import Layout from '../Components/Layout';
import Hero from '../Components/Home/Hero';
import NuestraAcademia from '../Components/Acerca/NuestraAcademia';

const Acerca = () => {
  return (
    <Layout>
      <Hero
        titulo2={'Acerca'}
        titulo={'de Nosotros'}
        boton={'Contrata tu clase'}
      />
      <NuestraAcademia />
    </Layout>
  );
};

export default Acerca;
