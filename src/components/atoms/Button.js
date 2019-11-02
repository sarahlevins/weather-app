import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, ...props }) => {
  return (
  <button onClick={onClick}>{props.children}</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;