import React from "react";
import DayOfWeek from "../atoms/DayOfWeek";
import WeatherIcon from "../atoms/WeatherIcon";
import TempHigh from "../atoms/TempHigh";
import TempLow from "../atoms/TempLow";
import HourlyWeather from "./HourlyWeather";
import "./DayWeather.css";

const DayWeather = ({
  date,
  icon,
  maxTemp,
  minTemp,
  list,
  onDailyClick,
  showHourly,
  ...props
}) => {
  return (
    <>
      <div className="day-weather-container" onClick={onDailyClick}>
        <div className="weather-day-of-week">
          <DayOfWeek date={date} />
        </div>
        <div className="weather-icon">
          <WeatherIcon icon={icon} width="30" />
        </div>
        <div className="weather-detail">
          <TempHigh maxTemp={maxTemp} />
        </div>
        <div className="weather-detail">
          <TempLow minTemp={minTemp} />
        </div>
      </div>
      {showHourly && <HourlyWeather list={list} />}
    </>
  );
};

export default DayWeather;
