import React from 'react';
import PropTypes from 'prop-types';
import './CityName.css'

const CityName = ({city, ...props}) => {
    return (
    <div className="CityName">
        {city}
    </div>
    );
};

CityName.propTypes ={
    city: PropTypes.string.isRequired
};

export default CityName;