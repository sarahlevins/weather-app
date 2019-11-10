import React from "react";
import "./TextLink.css";
// import PropTypes from 'prop-types';

const TextLink = ({ onButtonClick, ...props }) => {
  return (
    <>
      <div onClick={onButtonClick} className="TextLink">
        {props.children}
      </div>
    </>
  );
};

export default TextLink;
