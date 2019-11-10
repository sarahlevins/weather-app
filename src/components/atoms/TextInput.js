import React from "react";
import PropTypes from "prop-types";
import "./TextInput.css";

const TextInput = ({ name, value, onChange, ...props }) => {
  return (
    <input
      className="TextInput"
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
