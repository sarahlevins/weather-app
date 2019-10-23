import React from 'react';
import DayOfWeek from '../atoms/DayOfWeek';
import WeatherIcon from '../atoms/WeatherIcon';
import TempHigh from '../atoms/TempHigh';
import TempLow from '../atoms/TempLow';

const DayWeather = ({icon, ...props}) => {
    return (
        <div>
        <DayOfWeek />
        <WeatherIcon icon={icon}/>
        <TempHigh />
        <TempLow />
    </div>
    )
}

export default DayWeather;