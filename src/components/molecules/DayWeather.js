import React from 'react';
import DayOfWeek from '../atoms/DayOfWeek';
import WeatherIcon from '../atoms/WeatherIcon';
import TempHigh from '../atoms/TempHigh';
import TempLow from '../atoms/TempLow';
import HourlyWeather from './HourlyWeather';

// class DayWeather extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             date: '',
//             icon: '',
//             maxTemp: 0,
//             minTemp: 0,
//             list: {},
//             showHourlyWeather: false
//         };

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(state => ({
//         showHourlyWeather: !state.showHourlyWeather
//         }));
//     }

//     render() {
//     return (
//         <>
//         <div className="DayWeatherContainer">
//             <DayOfWeek date={this.date} />
//             <WeatherIcon icon={this.icon} />
//             <TempHigh maxTemp={this.maxTemp} />
//             <TempLow minTemp={this.minTemp} />
//         </div>
//         <HourlyWeather list={this.list} />
//         </>
//     )
// }

// }

const DayWeather = ({key, date, icon, maxTemp, minTemp, list, ...props}) => {
    return (
        <>
        <div className="DayWeatherContainer">
            <DayOfWeek date={date} />
            <WeatherIcon icon={icon} />
            <TempHigh maxTemp={maxTemp} />
            <TempLow minTemp={minTemp} />
        </div>
        <HourlyWeather list={list} />
        </>
    )
}



export default DayWeather;