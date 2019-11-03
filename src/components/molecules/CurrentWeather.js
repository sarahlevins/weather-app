import React from 'react';
import CityName from '../atoms/CityName';
import CityImage from '../atoms/CityImage';
import TempCurrent from '../atoms/TempCurrent';
import TextLink from '../atoms/TextLink';
import './CurrentWeather.css';

const CurrentWeather = ({city, cityimage, temp, changeCityLink, ...props}) => {
    return (
    <div className="CurrentWeather" style={{ backgroundImage: `${cityimage}` }}>
        <CityName city={city} />
        <TextLink onButtonClick={changeCityLink}>Change</TextLink>
        <TempCurrent temp={temp} />
    </div>
    );
};

export default CurrentWeather;