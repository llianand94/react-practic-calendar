import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarMonthHeader from './CalendarMonthHeader';
import ListOfWeekDays from './ListOfWeekDays';
import ListOfMonthDays from './ListOfMonthDays';


class CalendarMonth extends Component {
  render() {
    const {date} = this.props;
    return (
      <div className="section-calendar-month">
        <CalendarMonthHeader date={date}/>
        <ListOfWeekDays date={date}/>
        <ListOfMonthDays date={date}/>        
      </div>
    );
  }
}


CalendarMonth.propTypes = {
  date:PropTypes.object.isRequired,
};


export default CalendarMonth;
