import React from 'react';
import WeeklyForecast from '../components/organisms/WeeklyForecast';
import PageTemplate from '../components/templates/PageTemplate';
import ComplainLink from'../components/atoms/ComplainLink';
import {CURRENT_WEATHER, HOURLY_FORECAST, } from '../data/mockWeather';
import Forecast from '../components/organisms/Forecast';

const WeatherPage = () => {
  return (
    <div>
      <PageTemplate 
        city = {CURRENT_WEATHER.name} 
        cityimage = 'picture of city'
        temp = {CURRENT_WEATHER.main.temp}
        >
      <WeeklyForecast 
        icon = {HOURLY_FORECAST.list[0].weather[0].icon} 
        // temp = {}
        // mintemp = {}
        // maxtemp {}
        // time = {}
      />
      <ComplainLink />
      <Forecast />
      </PageTemplate>
    </div>
  );
}

export default WeatherPage;