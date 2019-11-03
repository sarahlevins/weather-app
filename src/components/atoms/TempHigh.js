import React from 'react';
import PropTypes from 'prop-types';
import './TempHigh.css'

const TempHigh = ({maxTemp, ...props}) => {
    return (
    <>
        <label className="TempHigh">{maxTemp}°</label>
    </>
    );
};

TempHigh.propTypes = {
    maxTemp: PropTypes.number.isRequired
};

export default TempHigh;