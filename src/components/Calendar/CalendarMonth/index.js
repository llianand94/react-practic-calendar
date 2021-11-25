import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CalendarMonth.module.scss';
import CalendarMonthHeader from './CalendarMonthHeader';
import ListOfWeekDays from './ListOfWeekDays';
import ListOfMonthDays from './ListOfMonthDays';
import TogglerMonth from './TogglerMonth';


const  CalendarMonth =(props)=> {  
  const {date,changeMonth } = props;
  return (
    <div className={styles.sectionCalendarMonth}>
      <CalendarMonthHeader date={date}/>
      <ListOfWeekDays date={date}/>
      <ListOfMonthDays date={date}/> 
      <TogglerMonth changeMonth={changeMonth} date={date}/>       
    </div>
  );  
}


CalendarMonth.propTypes = {
  date:PropTypes.object.isRequired,
  changeMonth:PropTypes.func,
};


export default CalendarMonth;
