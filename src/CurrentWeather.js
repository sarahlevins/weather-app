import React from 'react';

const CurrentWeather = ({city, temperature, goodtimes, ...props}) => {
    return (
        <div>
            <div>{temperature}</div>
            <div>{city}</div>
            <div>{goodtimes}</div>
        </div>
    );
};

export default CurrentWeather;
