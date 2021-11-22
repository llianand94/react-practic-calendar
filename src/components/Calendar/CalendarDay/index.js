import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';



class CalendarDay extends Component {
  render() {
    return <div className="section-calendar-day">
        <h1 className="header">{format(this.props.date, 'eeee')}</h1>
        <span  className="curr-date">{format(this.props.date, 'dd')} </span>
      </div>
    ;
  }
}


CalendarDay.propTypes = {

};


export default CalendarDay;
