import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';
import './HourlyWeather.css';


const HourlyWeather = ({ list, ...props }) => {
    return (
        <div className="HourlyWeather">
          <ul className="HourlyWeatherList">
          {list.map(item => (
            <HourlyWeatherItem
              key={item.dt}
              time={item.dt_txt}
              temp={parseInt(item.main.temp)}
            />
          ))}
          </ul>
        </div>
    );
  };

export default HourlyWeather;