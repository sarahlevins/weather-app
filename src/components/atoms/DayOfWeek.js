import React from 'react';

const DayOfWeek = ({date, ...props}) => {
    return (
    <div>
        <p>{date}</p>
    </div>
    );
};

export default DayOfWeek;