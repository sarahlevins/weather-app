import React from 'react';
import DayOfWeek from '../atoms/DayOfWeek';
import WeatherIcon from '../atoms/WeatherIcon';
import TempHigh from '../atoms/TempHigh';
import TempLow from '../atoms/TempLow';
import HourlyWeather from './HourlyWeather';

const DayWeather = ({key, date, icon, maxTemp, minTemp, list, ...props}) => {
    return (
        <>
        <div className="DayWeatherContainer">
            <DayOfWeek date={date} />
            <WeatherIcon icon={icon} />
            <TempHigh maxTemp={maxTemp} />
            <TempLow minTemp={minTemp} />
        </div>
        <HourlyWeather list={list} />
        </>
    )
}

export default DayWeather;