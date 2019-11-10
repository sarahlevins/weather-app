import React from "react";
import HourlyWeatherItem from "./HourlyWeatherItem";
import "./HourlyWeather.css";

const HourlyWeather = ({ list, ...props }) => {
  return (
    <div className="HourlyWeather">
      <ul className="HourlyWeatherList">
        {list.map(item => (
          <HourlyWeatherItem
            key={item.dt}
            icon={item.weather[0].icon}
            time={item.dt}
            temp={parseInt(item.main.temp)}
          />
        ))}
      </ul>
    </div>
  );
};

export default HourlyWeather;
