import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalendarMonth.module.scss';
// import CalendarMonthHeader from './CalendarMonthHeader';
import ListOfWeekDays from './ListOfWeekDays';
import ListOfMonthDays from './ListOfMonthDays';
import TogglerMonth from './TogglerMonth';
import CalendarHeader from './../CalendarHeader';


const  CalendarMonth =(props)=> {  
  const {date,changeMonth } = props;
  return (
    <div className={styles.sectionCalendarMonth}>
      <CalendarHeader date={date} pattern="MMMM yyyy"/>      
      <div className={styles.listsWprapper}>
        <ListOfWeekDays date={date}/>
        <ListOfMonthDays date={date}/> 
        <TogglerMonth changeMonth={changeMonth} date={date}/>  
      </div>           
    </div>
  );  
}


CalendarMonth.propTypes = {
  date:PropTypes.object.isRequired,
  changeMonth:PropTypes.func,
};


export default CalendarMonth;
