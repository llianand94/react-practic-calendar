import React from 'react';
import PropTypes from 'prop-types';
import ListOfWeekDays from './ListOfWeekDays';
import ListOfMonthDays from './ListOfMonthDays';
import TogglerMonth from './TogglerMonth';
import CalendarHeaderItem from '../CalendarHeaderItem';
import styles from './CalendarSectionOfMonth.module.scss';

const  CalendarSectionOfMonth =(props)=> {  
  const {date, changeMonth, currentDate } = props;
  return (
    <div className={styles.sectionCalendarMonth}>
      <CalendarHeaderItem date={date} pattern="MMMM yyyy"/>      
      <div className={styles.listsWprapper}>
      <TogglerMonth changeMonth={changeMonth} date={date}/> 
      <ListOfWeekDays date={date}/>
      <ListOfMonthDays date={date} currentDate={currentDate}/> 
         
      </div>           
    </div>
  );  
}


CalendarSectionOfMonth.propTypes = {
  date:PropTypes.object.isRequired,
  changeMonth:PropTypes.func,
};


export default CalendarSectionOfMonth;
