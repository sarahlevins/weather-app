import React from 'react';
import Hour from '../atoms/Hour';
import TempCurrent from '../atoms/TempCurrent';
import WeatherIcon from '../atoms/WeatherIcon';

const HourlyWeatherItem = () => {
    return (
    <div>
        <Hour />
        <TempCurrent />
        <WeatherIcon />
    </div>
    );
};

export default HourlyWeatherItem;