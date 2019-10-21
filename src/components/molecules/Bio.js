import React from 'react';

import Header from '../atoms/Header';
import BioDescription from '../atoms/BioDescription';
import BioPicture from '../atoms/BioPicture';

const Bio = () => {
    return (
    <div>
        <Header />
        <BioDescription />
        <BioPicture />
    </div>
    );
};

export default Bio;