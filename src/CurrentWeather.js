import React from 'react';

const CurrentWeather = (props) => {
    return (
        <div>
            <div>{props.temperature}</div>
            <div>{props.city}</div>
            <div>{props.goodtimes}</div>
        </div>
    );
};

export default CurrentWeather;
