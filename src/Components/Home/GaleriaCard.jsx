import React from 'react';

const GaleriaCard = ({ imagen }) => {
  return (
    <div className='border-2 rounded-3xl p-4 border-yellow-400'>
      <img src={imagen} alt='' />
    </div>
  );
};

export default GaleriaCard;
