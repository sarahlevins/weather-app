import React from 'react';
import PropTypes from 'prop-types';

const TempLow = ({minTemp, ...props}) => {
    return (
    <div>
        <p>Low is {minTemp}</p>
    </div>
    );
};

TempLow.propTypes = {
    minTemp: PropTypes.number.isRequired
};

export default TempLow;