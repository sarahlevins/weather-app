import React from 'react';
import {Link} from 'react-router-dom';
import WeeklyForecast from '../components/organisms/WeeklyForecast';
import PageTemplate from '../components/templates/PageTemplate';
import Button from '../components/atoms/Button';

const WeatherPage = ({city, temp, changeCity, forecast, ...props}) => {
  return (
      <PageTemplate 
        city = {city}
        cityimage = 'picture of city'
        temp = {temp}
        changeCity = {changeCity}
        >

        <WeeklyForecast forecast = {forecast}/>
        
        <Link to="/complain">
          <Button>go complain to weatherman</Button>
        </Link>
      
      </PageTemplate>
  );
}

export default WeatherPage;