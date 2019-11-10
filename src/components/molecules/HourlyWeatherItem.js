import React from "react";
import moment from "moment";
import WeatherIcon from "../atoms/WeatherIcon";

const HourlyWeatherItem = ({ time, temp, icon, ...props }) => {
  return (
    <li>
      <div>{moment.unix(time).format("ha")}</div>
      <div className="hourly-weather-icon">
        <WeatherIcon width="15" icon={icon} />
      </div>
      <div>{temp}°</div>
    </li>
  );
};

export default HourlyWeatherItem;
