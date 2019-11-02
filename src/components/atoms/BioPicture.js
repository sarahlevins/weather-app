import React from 'react';
import PropTypes from 'prop-types';

const BioPicture = () => {
    return (
    <div>
        <p>This is a picture of the weatherman</p>
    </div>
    );
};

BioPicture.propTypes ={
    image: PropTypes.string.isRequired
};

export default BioPicture;