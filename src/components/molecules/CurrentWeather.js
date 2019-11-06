import React from 'react';
import CityName from '../atoms/CityName';
import CityImage from '../atoms/CityImage';
import TempCurrent from '../atoms/TempCurrent';
import TextLink from '../atoms/TextLink';
import './CurrentWeather.css';

const CurrentWeather = ({city, cityimage, temp, changeCityLink, ...props}) => {
    return (
    <div className="current-weather-container" style={{ backgroundImage: `url(/static/${city}.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
        <div className="city-name-container">
            <CityName city={city} />
        </div>
        <div className="change-link-container">
            <TextLink onButtonClick={changeCityLink}>Change</TextLink>
        </div>
        <div className="temp-current-container">
            <TempCurrent temp={temp} />
        </div>
    </div>
    );
};

export default CurrentWeather;