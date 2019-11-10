import React from "react";
import PropTypes from "prop-types";

const BioPicture = ({ image, imagealt, ...props }) => {
  return (
    <div className="bio-picture-container">
      <img src={image} className="bio-picture" alt={imagealt} />
    </div>
  );
};

BioPicture.propTypes = {
  image: PropTypes.string.isRequired
};

export default BioPicture;
