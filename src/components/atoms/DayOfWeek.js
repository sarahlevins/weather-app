import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './DayOfWeek.css';

const DayOfWeek = ({date, ...props}) => {
    return (
    <>
        <label className="DayOfWeek">{moment(date).format('dddd')}</label>
    </>
    );
};

DayOfWeek.propTypes ={
    date: PropTypes.string.isRequired
};

export default DayOfWeek;