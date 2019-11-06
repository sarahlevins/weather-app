import React from 'react';
import moment from 'moment';
import WeatherIcon from '../atoms/WeatherIcon';

const HourlyWeatherItem = ({time, temp, icon, ...props}) => {
    return(
        <li>
            <div>{moment(time).format('ha')}</div>
            <div><WeatherIcon icon={icon} /></div>
            <div>{temp}°</div>
        </li>
    )
};

export default HourlyWeatherItem;