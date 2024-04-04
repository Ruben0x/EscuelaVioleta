import React from 'react';

const ClaseCard = ({ titulo, img }) => {
  return (
    <div>
      <div>
        <img src={img} alt='' />
      </div>
      <div>
        <h3>{titulo}</h3>
      </div>
    </div>
  );
};

export default ClaseCard;
