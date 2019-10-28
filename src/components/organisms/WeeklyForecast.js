import React from 'react';
import DayWeather from '../molecules/DayWeather';
import HourlyWeather from'../molecules/HourlyWeather';
import Forecast from '../organisms/Forecast';

const WeeklyForecast = ({icon, ...props}) => {
    return (
    <div>
        <h2>Today:</h2>
        <Forecast />
        <HourlyWeather icon={icon}/>
        <h2>Upcoming:</h2>
        <DayWeather icon={icon} />
        <DayWeather icon={icon} />
        <DayWeather icon={icon} />
        <DayWeather icon={icon} />
        <DayWeather icon={icon} />
    </div>
    );
};

export default WeeklyForecast;