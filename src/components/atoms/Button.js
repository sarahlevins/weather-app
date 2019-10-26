import React from 'react';

const Button = ({ onClick, ...props }) => {
  return (
  <button onClick={onClick}>{props.children}</button>
  );
};

export default Button;