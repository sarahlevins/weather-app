import React from 'react';
import PropTypes from 'prop-types';

const WeatherIcon = ({icon, ...props}) => {
    return (
    <>
        <img src={icon}></img>
    </>
    );
};

WeatherIcon.propTypes = {
    icon: PropTypes.string.isRequired,
  };
  

export default WeatherIcon;