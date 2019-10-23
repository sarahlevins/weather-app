import React from 'react';

const CityName = ({city, ...props}) => {
    return (
    <div>
        <p>{city}</p>
    </div>
    );
};

export default CityName;