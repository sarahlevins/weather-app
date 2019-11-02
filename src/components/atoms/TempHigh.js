import React from 'react';
import PropTypes from 'prop-types';

const TempHigh = ({maxTemp, ...props}) => {
    return (
    <div>
        <p>High is {maxTemp}</p>
    </div>
    );
};

TempHigh.propTypes = {
    maxTemp: PropTypes.number.isRequired
};

export default TempHigh;