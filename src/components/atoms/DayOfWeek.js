import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const DayOfWeek = ({date, ...props}) => {
    return (
    <div>
        <p>{moment(date).format('dddd')}</p>
    </div>
    );
};

DayOfWeek.propTypes ={
    date: PropTypes.string.isRequired
};

export default DayOfWeek;