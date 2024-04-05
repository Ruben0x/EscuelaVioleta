import React from 'react';

const Button = ({ title, onClick, size }) => {
  return (
    <button
      onClick={onClick}
      className='bg-violet-500 text-white px-4 py-2 rounded-md'
    >
      {title}
    </button>
  );
};

export default Button;
