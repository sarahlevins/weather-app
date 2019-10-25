import React from 'react';

import BioHeader from '../atoms/BioHeader';
import BioDescription from '../atoms/BioDescription';
import BioPicture from '../atoms/BioPicture';
import WeatherLink from '../atoms/WeatherLink';

const Bio = () => {
    return (
    <div>
        <BioHeader />
        <BioDescription />
        <BioPicture />
    </div>
    );
};

export default Bio;