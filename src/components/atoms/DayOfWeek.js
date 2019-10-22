import React from 'react';

class DayOfWeek extends React.Component {
    render(){
        const weekday = this.props.weekday
        return (
        <div>
            <p>{weekday}</p>
        </div>
        )
    }
};

export default DayOfWeek;