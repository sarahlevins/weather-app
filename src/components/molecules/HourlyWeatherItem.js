import React from 'react';
import TempCurrent from '../atoms/TempCurrent';
import WeatherIcon from '../atoms/WeatherIcon';

const HourlyWeatherItem = ({icon, hour, ...props}) => {
    return (
    <div>
        <TempCurrent />
        <WeatherIcon icon={icon} />
    </div>
    );
};

export default HourlyWeatherItem;