import React from 'react';

const TempHigh = ({maxTemp, ...props}) => {
    return (
    <div>
        <p>High is {maxTemp}</p>
    </div>
    );
};

export default TempHigh;