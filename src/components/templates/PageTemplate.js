import React from 'react';
import CurrentWeather from '../molecules/CurrentWeather';

const PageTemplate = ({city, cityimage, temp, ...props}) => {
  return (
    <div>
      <CurrentWeather 
      city = {city}
      cityimage = {cityimage} 
      temp = {temp}
      />
      {props.children}
    </div>
  );
};

export default PageTemplate;
