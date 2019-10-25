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
    
    
    
    return(
        <div>

        </div>
    );
}

export default Forecast;