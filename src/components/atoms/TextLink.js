import React from "react";
import "./TextLink.css";
// import PropTypes from 'prop-types';

const TextLink = ({ onButtonClick, ...props }) => {
  return (
    <>
      <a href onClick={onButtonClick} className="TextLink">
        {props.children}
      </a>
    </>
  );
};

export default TextLink;
