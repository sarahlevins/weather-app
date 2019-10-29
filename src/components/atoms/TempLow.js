import React from 'react';

const TempLow = ({minTemp, ...props}) => {
    return (
    <div>
        <p>Low is {minTemp}</p>
    </div>
    );
};

export default TempLow;