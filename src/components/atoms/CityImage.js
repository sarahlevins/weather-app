import React from 'react';
import PropTypes from 'prop-types';

const CityImage = ({cityimage, ...props}) => {
    return (
        <div>
            <p>
            {cityimage}
            </p>
        </div>
    );
};

CityImage.propTypes ={
    cityimage: PropTypes.string.isRequired
};

export default CityImage;