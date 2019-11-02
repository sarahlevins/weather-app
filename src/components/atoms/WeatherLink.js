import React from 'react';
from PropTypes import 'prop-types';

const WeatherLink = () => {
    return (
    <div>
        <button>go back to weather</button>
    </div>
    );
};

WeatherLink.propTypes ={
    button: PropTypes.elementType.isRequired
};

export default WeatherLink;