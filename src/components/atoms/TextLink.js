import React from 'react';
import './TextLink.css';
// import PropTypes from 'prop-types';

const TextLink = ({ onButtonClick, ...props }) => {
    return (
      <>
        <button onClick={onButtonClick} className="TextLink">{props.children}</button>
      </>
    );
  };
  
  export default TextLink;