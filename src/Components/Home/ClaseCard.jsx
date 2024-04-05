import React from 'react';

const ClaseCard = ({ titulo, img }) => {
  return (
    <div className='border-2 rounded-xl p-5 border-yellow-400 '>
      <div className='transition-transform duration-150 ease-in-out hover:scale-125'>
        <img src={img} alt='' />
      </div>
      <div className='py-4 self-center'>
        <h3>{titulo}</h3>
      </div>
    </div>
  );
};

export default ClaseCard;
