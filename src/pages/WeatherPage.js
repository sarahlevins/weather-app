import React from 'react';
import {Link} from 'react-router-dom';
import PageTemplate from '../components/templates/PageTemplate';
import TextLink from '../components/atoms/TextLink';
import Forecast from '../components/organisms/Forecast';

const WeatherPage = ({city, temp, changeCity, forecast, ...props}) => {
  return (
      <PageTemplate 
        city = {city}
        cityimage = {`./media/${city}.jpg` }
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