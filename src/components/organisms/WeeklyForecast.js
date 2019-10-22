import React from 'react';
import DayWeather from '../molecules/DayWeather';
import HourlyWeather from'../molecules/HourlyWeather';

const WeeklyForecast = () => {
    return (
    <div>
        <h2>Today:</h2>
        <DayWeather weekday="Monday"/>
        <HourlyWeather />
        <h2>Upcoming:</h2>
        <DayWeather weekday="Tuesday"/>
        <DayWeather weekday="Wednesday"/>
        <DayWeather weekday="Thursday"/>
        <DayWeather weekday="Friday"/>
        <DayWeather weekday="Saturday"/>
        <DayWeather weekday="Sunday"/>
    </div>
    );
};

export default WeeklyForecast;