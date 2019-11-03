import React from 'react';
import {Link} from 'react-router-dom';
import PageTemplate from '../components/templates/PageTemplate';
import TextLink from '../components/atoms/TextLink';
import Forecast from '../components/organisms/Forecast';

const WeatherPage = ({city, temp, changeCity, forecast, ...props}) => {
  return (
      <PageTemplate 
        city = {city}
        cityimage = "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/74/aa/fc.jpg"
        temp = {temp}
        changeCity = {changeCity}
        >
          
        <Forecast forecast = {forecast}/>
        
        <Link to="/complain">
          <TextLink>Complain to the Weather Person</TextLink>
        </Link>
      
      </PageTemplate>
  );
}

export default WeatherPage;