import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarMonthHeader from './CalendarMonthHeader';
import ListOfWeekDays from './ListOfWeekDays';
import ListOfMonthDays from './ListOfMonthDays';
import styles from './CalendarMonth.module.scss';


class CalendarMonth extends Component {
  render() {
    const {date} = this.props;
    return (
      <div className={styles.sectionCalendarMonth}>
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
