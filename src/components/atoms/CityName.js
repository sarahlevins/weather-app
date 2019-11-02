import React from 'react';
import PropTypes from 'prop-types';

const CityName = ({city, ...props}) => {
    return (
    <div>
        <p>{city}</p>
    </div>
    );
};

CityName.propTypes ={
    city: PropTypes.string.isRequired
};

export default CityName;