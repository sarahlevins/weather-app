import React from 'react';
import WeeklyForecast from './WeeklyForecast';
import { HOURLY_FORECAST } from '../../data/mockWeather';


const Forecast = () => {

    const chunkedArray = [];
    const hourlyForecastArray = HOURLY_FORECAST.list
    for(let i = 0; i <= hourlyForecastArray.length; i++) {
            chunkedArray.push(hourlyForecastArray[i]);
        }
    console.log(chunkedArray);
    
    const time = chunkedArray[0].dt_txt;
    const temp = chunkedArray[0].main.temp;
    const icon = chunkedArray[0].weather[0].icon;
    
    return(
        <div>
            <p>{time}</p>
            <p>{temp}</p>
            <p>{icon}</p>
        </div>
    );
}

export default HourlyForecast;