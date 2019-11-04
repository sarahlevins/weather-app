import React from 'react';
import PropTypes from 'prop-types';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiCloud, WiRain } from "react-icons/wi";

class WeatherIcon extends React.Component {

    render() {
        
        const icons = {
            "01d": "WiDaySunny",
            "01n": "WiNightClear",
            "02d": "WiDayCloudy",
            "02n": "WiNightAltCloudy",
            "03d": "WiCloud",
            "03n": "WiCloud",
            "04d": "WiDayCloudy",
            "04n": "WiNightAltCloudy",
            "09d": "WiShowers",
            "09n": "WiNightAltShowers",
            "10d": "WiRain",
            "10n": "WiNightRain",
            "11d": "WiThunderstorm",
            "11n": "WiNightAltThunderstorm",
            "13d": "WiSnow",
            "13n": "WiSnow",
            "50d": "WiFog",
            "50n": "WiFog",
        };
            const TagName = icons[this.props.icon];
            console.log(TagName);

        return (
            <>
                <WiRain />
            </>
        )
    }
}  

export default WeatherIcon;