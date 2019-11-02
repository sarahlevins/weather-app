import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, value, onChange, ...props}) => {
  return <input type="text" name={name} value={value} onChange={onChange} />;
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;