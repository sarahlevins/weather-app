import React from 'react';
import PropTypes from 'prop-types';

const WeatherIcon = ({icon, ...props}) => {
    return (
    <div>
        <p>{icon}</p>
    </div>
    );
};

WeatherIcon.propTypes = {
    icon: PropTypes.string.isRequired,
  };
  

export default WeatherIcon;