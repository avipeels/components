import React from 'react';

const Button = ({ name, onClickHandler }) => {
  return (
    <button type="button" onClick={onClickHandler()}>
      {name}
    </button>
  );
};

export default Button;
