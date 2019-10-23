import React from 'react';

const TempCurrent = ({temp, ...props}) => {
    return (
    <div>
        <p>{temp}</p>
    </div>
    );
};

export default TempCurrent;