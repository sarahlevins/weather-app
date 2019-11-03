import React from 'react';
import PropTypes from 'prop-types';
import "./CityImage.css";

const CityImage = ({cityimage, ...props}) => {
    return (
        <div className="CityImage"> 
        </div>
    );
};

CityImage.propTypes ={
    cityimage: PropTypes.string.isRequired
};

export default CityImage;