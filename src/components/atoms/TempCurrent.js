import React from 'react';
import PropTypes from 'prop-types';

const TempCurrent = ({temp, ...props}) => {
    console.log(typeof temp, temp);
    return (
    <div>
        <p>{temp}</p>
    </div>
    );
};

TempCurrent.propTypes = {
    temp: PropTypes.number.isRequired
};


export default TempCurrent;