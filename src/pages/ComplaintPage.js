import React from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import ComplaintForm from '../components/organisms/ComplaintForm';
import Bio from '../components/molecules/Bio';
import {CURRENT_WEATHER} from '../data/mockWeather';



const ComplaintPage = () => {
  return (
    <PageTemplate 
    city = {CURRENT_WEATHER.name}
    cityimage = 'picture of city' >
    <Bio />
    <ComplaintForm />
    </PageTemplate>
  );

}

export default ComplaintPage;