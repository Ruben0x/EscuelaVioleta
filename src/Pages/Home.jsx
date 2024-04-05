import React from 'react';
import Navbar from '../Components/Navbar';
import Layout from '../Components/Layout';
import Hero from '../Components/Home/Hero';
import Bailemos from '../Components/Home/Bailemos';
import NuestrasClases from '../Components/Home/NuestrasClases';
import Galeria from '../Components/Home/Galeria';

const Home = () => {
  const titulo = 'Lorem Ipsum ipso, Lorem Ipsum.';
  const parrafo =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus numquam ut doloremque atque! Perspiciatis, rem';

  return (
    <Layout>
      <Hero
        boton={'Inscribete'}
        parrafo={parrafo}
        titulo={titulo}
        extraInfo={true}
      />
      <Bailemos />
      <NuestrasClases />
      <Galeria />
    </Layout>
  );
};

export default Home;
