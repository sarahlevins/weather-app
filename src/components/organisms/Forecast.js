import React from 'react';
import DayWeather from'../molecules/DayWeather';
import PropTypes from 'prop-types';

const Forecast = ({forecast, ...props}) => {
    var chunk = require('chunk');
    const chunkedForecast = chunk(forecast, forecast.length / 5);
    // get max temp
    const getMaxTemp = array =>
        array.reduce((acc, cur) => (acc.main.temp > cur.main.temp ? acc : cur));
    // get min temp
    const getMinTemp = array =>
        array.reduce((acc, cur) => (acc.main.temp < cur.main.temp ? acc : cur));
    return(
        <div>
            {chunkedForecast.map((day, i) => (
                <React.Fragment key={i}>
                    {i === 0 && <label>Today:</label>}
                    {i === 1 && <label>Upcoming:</label>}
                    <DayWeather
                    date={day[0].dt_txt}
                    icon={day[0].weather[0].icon}
                    maxTemp={parseInt(getMaxTemp(day).main.temp)}
                    minTemp={parseInt(getMinTemp(day).main.temp)}
                    list={day}
                />
                </React.Fragment>
            ))}
        </div>
    );
}

Forecast.propTypes ={
    forecast: PropTypes.arrayOf(PropTypes.shape({
        dt_txt: PropTypes.string.isRequired,
        main: PropTypes.object.isRequired,
        weather: PropTypes.array.isRequired,
    })).isRequired 
};


export default Forecast;