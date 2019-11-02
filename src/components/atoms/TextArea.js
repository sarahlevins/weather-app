import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({name, value, onChange, ...props}) => {
  return <textarea name={name} value={value} onChange={onChange} />;
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;