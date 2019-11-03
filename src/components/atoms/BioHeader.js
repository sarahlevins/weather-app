import React from 'react';
import PropTypes from 'prop-types';

const BioHeader = ({header, ...props}) => {
    return (
    <div>
        {header}
    </div>
    );
};

BioHeader.propTypes ={
    header: PropTypes.string.isRequired
};

export default BioHeader;