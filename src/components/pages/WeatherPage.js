import React from 'react';
import WeeklyForecast from '../organisms/WeeklyForecast';
import PageTemplate from '../templates/PageTemplate';
import ComplainLink from'../atoms/ComplainLink';

function WeatherPage() {
  return (
    <div>
        <PageTemplate>
        <WeeklyForecast />
        <ComplainLink />
        </PageTemplate>
    </div>
  );
}

export default WeatherPage;