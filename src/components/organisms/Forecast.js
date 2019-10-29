import React from 'react';
import DayWeather from'../molecules/DayWeather';
import HourlyWeather from '../molecules/HourlyWeather';

const Forecast = ({forecast, ...props}) => {

    var chunk = require('chunk');
    const chunkedForecast = chunk(forecast, forecast.length / 5);
    console.log(chunkedForecast);
    // get max temp
    const getMaxTemp = array =>
        array.reduce((acc, cur) => (acc.main.temp > cur.main.temp ? acc : cur));
    // get min temp
    const getMinTemp = array =>
        array.reduce((acc, cur) => (acc.main.temp < cur.main.temp ? acc : cur));

    return(
        <div>
            <HourlyWeather hourlyforecast={chunkedForecast[0]}/>
            {chunkedForecast.map((day, i) => (
                <React.Fragment key={i}>
                    {i === 0 && <h2>Today:</h2>}
                    {i === 1 && <h2>Upcoming:</h2>}
                    <DayWeather
                    date={day[0].dt_txt}
                    icon={day[0].weather[0].icon}
                    maxTemp={getMaxTemp(day).main.temp}
                    minTemp={getMinTemp(day).main.temp}
                    list={day}
                />
                </React.Fragment>
            ))}
        </div>
    );
}

export default Forecast;