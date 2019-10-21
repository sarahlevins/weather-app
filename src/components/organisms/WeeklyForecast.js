import React from 'react';
import DayWeather from '../molecules/DayWeather';
import HourlyWeather from'../molecules/HourlyWeather';

const WeeklyForecast = () => {
    return (
    <div>
        <h2>Today:</h2>
        <DayWeather />
        <HourlyWeather />
        <h2>Upcoming:</h2>
        <DayWeather />
        <DayWeather />
        <DayWeather />
        <DayWeather />
        <DayWeather />
    </div>
    );
};

export default WeeklyForecast;