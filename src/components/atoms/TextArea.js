import React from "react";
import PropTypes from "prop-types";
import "./TextArea.css";

const TextArea = ({ name, value, onChange, ...props }) => {
  return (
    <textarea
      className="TextArea"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextArea;
