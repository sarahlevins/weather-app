import React from 'react';
import WeeklyForecast from '../organisms/WeeklyForecast';
import PageTemplate from '../templates/PageTemplate';

function WeatherPage() {
  return (
    <div>
        <PageTemplate>
        <WeeklyForecast />
        </PageTemplate>
    </div>
  );
}

export default WeatherPage;