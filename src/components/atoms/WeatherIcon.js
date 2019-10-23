import React from 'react';

const WeatherIcon = ({icon, ...props}) => {
    return (
    <div>
        <p>{icon}</p>
    </div>
    );
};

export default WeatherIcon;