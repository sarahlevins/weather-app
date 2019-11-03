import React from 'react';
import PropTypes from 'prop-types';

const BioPicture = ({image, ...props}) => {
    return (
    <div>
        {image}
    </div>
    );
};

BioPicture.propTypes ={
    image: PropTypes.string.isRequired
};

export default BioPicture;