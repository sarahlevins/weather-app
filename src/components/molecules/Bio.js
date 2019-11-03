import React from 'react';
import BioHeader from '../atoms/BioHeader';
import BioDescription from '../atoms/BioDescription';
import BioPicture from '../atoms/BioPicture';
import PropTypes from 'prop-types';

const Bio = ({header, description, image, ...props}) => {
    return (
    <div>
        <h2><BioHeader header={header} /></h2>
        <BioDescription description={description} />
        <BioPicture image={image} />
    </div>
    );
};

Bio.propTypes ={
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Bio;