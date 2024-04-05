import React, { useState } from 'react';
import { clasesDeDanza } from '../../utils/utils';
import GaleriaCard from './GaleriaCard';
import Button from '../Button';

const GridGaleria = () => {
  const [ver, setVer] = useState(6);

  const listafotos = clasesDeDanza;

  const verMasFotos = () => {
    setVer(ver + 6);
  };
  const verMenosFotos = () => {
    setVer(6);
  };

  return (
    <>
      <div className='grid grid-cols-3 gap-5'>
        {listafotos.slice(0, ver).map((foto) => (
          <GaleriaCard key={foto.id} imagen={foto.imagen} />
        ))}
      </div>
      <div className='m-7'>
        {listafotos.length > ver ? (
          <Button onClick={verMasFotos} title={'Ver más'} />
        ) : (
          <Button onClick={verMenosFotos} title={'Ver menos'} />
        )}
      </div>
    </>
  );
};

export default GridGaleria;
