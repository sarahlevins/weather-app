import React from 'react';
import PropTypes from 'prop-types';

const ChangeCityButton = (button, ...props) => {
    return (
    <div>
        <button>change city</button>
    </div>
    );
};

ChangeCityButton.propTypes ={
    button: PropTypes.elementType.isRequired
};

export default ChangeCityButton;