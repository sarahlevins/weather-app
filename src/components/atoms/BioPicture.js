import React from "react";
import PropTypes from "prop-types";

const BioPicture = ({ image, imagealt, ...props }) => {
  return (
    <div>
      <img src={image} alt={imagealt} />
    </div>
  );
};

BioPicture.propTypes = {
  image: PropTypes.string.isRequired
};

export default BioPicture;
