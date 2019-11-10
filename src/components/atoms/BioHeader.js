import React from "react";
import PropTypes from "prop-types";

const BioHeader = ({ header, ...props }) => {
  return <div className="bio-header">{header}</div>;
};

BioHeader.propTypes = {
  header: PropTypes.string.isRequired
};

export default BioHeader;
