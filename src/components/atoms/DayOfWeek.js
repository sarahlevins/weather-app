import React from 'react';
import moment from 'moment';

const DayOfWeek = ({date, ...props}) => {
    return (
    <div>
        <p>{moment(date).format('dddd')}</p>
    </div>
    );
};

export default DayOfWeek;