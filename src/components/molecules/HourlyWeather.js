import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';


const HourlyWeather = ({icon, ...props}) => {
    return (
    <div>
        <h2>Hourly Weather</h2>
        <HourlyWeatherItem icon={icon} />
        <HourlyWeatherItem icon={icon} />
        <HourlyWeatherItem icon={icon} />
        <HourlyWeatherItem icon={icon} />
        <HourlyWeatherItem icon={icon} />
        <HourlyWeatherItem icon={icon} />
    </div>
    );
};

export default HourlyWeather;