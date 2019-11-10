import React, { useState } from "react";
import DayWeather from "../molecules/DayWeather";
import PropTypes from "prop-types";
import "./Forecast.css";

const Forecast = ({ forecast, ...props }) => {
  var chunk = require("chunk");
  const chunkedForecast = chunk(forecast, forecast.length / 5);
  // get max temp
  const getMaxTemp = array =>
    array.reduce((acc, cur) => (acc.main.temp > cur.main.temp ? acc : cur));
  // get min temp
  const getMinTemp = array =>
    array.reduce((acc, cur) => (acc.main.temp < cur.main.temp ? acc : cur));

  //set state for hourly weather accordian
  const [showHourly, setShowHourly] = useState(0);

  return (
    <div>
      {chunkedForecast.map((day, i) => (
        <React.Fragment key={i}>
          {i === 0 && <label className="label-alignment">Today:</label>}
          {i === 1 && <label className="label-alignment">Upcoming:</label>}
          <DayWeather
            date={day[0].dt_txt}
            index={i}
            icon={day[0].weather[0].icon}
            maxTemp={parseInt(getMaxTemp(day).main.temp)}
            minTemp={parseInt(getMinTemp(day).main.temp)}
            list={day}
            onDailyClick={() => setShowHourly(i)}
            showHourly={showHourly === i}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

Forecast.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      dt_txt: PropTypes.string.isRequired,
      main: PropTypes.object.isRequired,
      weather: PropTypes.array.isRequired
    })
  ).isRequired
};

export default Forecast;
