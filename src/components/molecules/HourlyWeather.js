import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';


const HourlyWeather = ({ list, ...props }) => {
    return (
        <ul>
        {list.map(item => (
          <HourlyWeatherItem
            key={item.dt}
            time={item.dt_txt}
            temp={item.main.temp}
          />
        ))}
        </ul>
    );
  };

export default HourlyWeather;