import React from 'react';
import DayOfWeek from '../atoms/DayOfWeek';
import WeatherIcon from '../atoms/WeatherIcon';
import TempHigh from '../atoms/TempHigh';
import TempLow from '../atoms/TempLow';

class DayWeather extends React.Component {
    render(){
        const weekday = this.props.weekday
    return (
    <div>
        <DayOfWeek weekday={weekday}/>
        <WeatherIcon />
        <TempHigh />
        <TempLow />
    </div>
    )
    }
};

export default DayWeather;