import React from 'react';
import WeeklyForecast from '../components/organisms/WeeklyForecast';
import PageTemplate from '../components/templates/PageTemplate';
import ComplainLink from'../components/atoms/ComplainLink';
import {CURRENT_WEATHER, } from '../data/mockWeather';

const WeatherPage = () => {
  return (
    <div>
      <PageTemplate 
        city = {CURRENT_WEATHER.name} 
        cityimage = 'picture of city'>
      <WeeklyForecast icon ='weather icon'/>
      <ComplainLink />
      </PageTemplate>
    </div>
  );
}

export default WeatherPage;