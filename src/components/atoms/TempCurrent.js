import React from 'react';
import PropTypes from 'prop-types';
import './TempCurrent.css';

const TempCurrent = ({temp, ...props}) => {
    return (
    <div className="TempCurrent">
        {temp}°
    </div>
    );
};

TempCurrent.propTypes = {
    temp: PropTypes.number.isRequired
};


export default TempCurrent;