import React from "react";
import DayOfWeek from "../atoms/DayOfWeek";
import WeatherIcon from "../atoms/WeatherIcon";
import TempHigh from "../atoms/TempHigh";
import TempLow from "../atoms/TempLow";
import HourlyWeather from "./HourlyWeather";
import "./DayWeather.css";

class DayWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHourlyWeather: false,
      isOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      showHourlyWeather: !state.showHourlyWeather
    }));
  }

  render() {
    const dayWeather = (
      <div className="day-weather-container">
        <div className="weather-day-of-week">
          <DayOfWeek date={this.props.date} />
        </div>
        <div className="weather-icon">
          <WeatherIcon icon={this.props.icon} />
        </div>
        <div className="weather-detail">
          <TempHigh maxTemp={this.props.maxTemp} />
        </div>
        <div className="weather-detail">
          <TempLow minTemp={this.props.minTemp} />
        </div>
      </div>
    );

    return (
      <>
        {this.props.index !== 0 ? (
          <div onClick={this.handleClick}>
            {dayWeather}
            {this.state.showHourlyWeather === true && (
              <HourlyWeather list={this.props.list} />
            )}
          </div>
        ) : (
          <div>
            {dayWeather}
            <HourlyWeather list={this.props.list} />
          </div>
        )}
      </>
    );
  }
}

export default DayWeather;
