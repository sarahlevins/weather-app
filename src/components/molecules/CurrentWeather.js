import React from 'react';
import CityName from '../atoms/CityName';
import CityImage from '../atoms/CityImage';
import TempCurrent from '../atoms/TempCurrent';
import ChangeCityButton from '../atoms/ChangeCityButton';

const CurrentWeather = ({city, cityimage, temp, changeCityLink, ...props}) => {
    return (
    <div>
        <CityImage cityimage={cityimage}/>
        <CityName city={city} />
        <TempCurrent temp={temp} />
        <button onClick={changeCityLink}>Change City</button>
    </div>
    );
};

export default CurrentWeather;