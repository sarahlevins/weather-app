import React from 'react';
import PropTypes from 'prop-types';
import './TempLow.css'

const TempLow = ({minTemp, ...props}) => {
    return (
    <>
        <label className="TempLow">{minTemp}°</label>
    </>
    );
};

TempLow.propTypes = {
    minTemp: PropTypes.number.isRequired
};

export default TempLow;