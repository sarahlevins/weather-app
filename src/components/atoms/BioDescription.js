import React from 'react';
import PropTypes from 'prop-types';

const BioDescription = ({description, ...props}) => {

    return (
    <div>
        {description}
    </div>
    );
};

BioDescription.propTypes ={
    description: PropTypes.string.isRequired
};

export default BioDescription;