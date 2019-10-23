import React from 'react';
import CityName from '../atoms/CityName';
import CityImage from '../atoms/CityImage';
import TempCurrent from '../atoms/TempCurrent';
import ChangeCityButton from '../atoms/ChangeCityButton';

const CurrentWeather = ({city, cityimage, temp, ...props}) => {
    return (
    <div>
        <CityImage cityimage={cityimage}/>
        <CityName city={city} />
        <TempCurrent temp={temp} />
        <ChangeCityButton />
    </div>
    );
};

export default CurrentWeather;