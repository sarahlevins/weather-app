import React from 'react';
import moment from 'moment';

const HourlyWeatherItem = ({time, temp, ...props}) => {
    return(
        <li>
            <div>{moment(time).format('LT')}</div>
            <div>{temp}</div>
        </li>
    )
};

export default HourlyWeatherItem;