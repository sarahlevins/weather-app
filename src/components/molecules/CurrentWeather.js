import React from 'react';
import CityName from '../atoms/CityName';
import CityImage from '../atoms/CityImage';
import TempCurrent from '../atoms/TempCurrent';
import ChangeCityButton from '../atoms/ChangeCityButton';

const CurrentWeather = () => {
    return (
    <div>
        <CityImage />
        <CityName />
        <TempCurrent />
        <ChangeCityButton />
    </div>
    );
};

export default CurrentWeather;