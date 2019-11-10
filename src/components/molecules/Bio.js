import React from "react";
import BioHeader from "../atoms/BioHeader";
import BioDescription from "../atoms/BioDescription";
import BioPicture from "../atoms/BioPicture";
import PropTypes from "prop-types";
import "./Bio.css";

const Bio = ({ header, description, image, imagealt, ...props }) => {
  return (
    <div className="bio-container">
      <BioHeader className="bio-header" header={header} />
      <BioDescription className="meep" description={description} />
      <BioPicture image={image} className="bio-picture" imagealt={imagealt} />
    </div>
  );
};

Bio.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Bio;
