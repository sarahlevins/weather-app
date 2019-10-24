import React from 'react';
import WeeklyForecast from '../components/organisms/WeeklyForecast';
import PageTemplate from '../components/templates/PageTemplate';
import ComplainLink from'../components/atoms/ComplainLink';
import {CURRENT_WEATHER, HOURLY_FORECAST, } from '../data/mockWeather';

const bloop = () => {
  return(
    <p>bloop</p>
  );
}

const WeatherPage = (bloop) => {
  return (
    <div>
      <PageTemplate 
        city = {CURRENT_WEATHER.name} 
        cityimage = 'picture of city'
        temp = {CURRENT_WEATHER.main.temp}>
      <WeeklyForecast 
      icon = {HOURLY_FORECAST.list[0].weather.icon} />
      <ComplainLink />
      </PageTemplate>
    </div>
  );
}

export default WeatherPage;