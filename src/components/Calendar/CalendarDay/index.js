import React from 'react';
// import { format } from 'date-fns';
import styles from './CalendarDay.module.scss';
import PropTypes from 'prop-types';
import CalendarHeader from './../CalendarHeader';

const CalendarDay =({date})=> {  
  return <div className={styles.sectionCalendarDay}>
    <CalendarHeader addStyle={styles.fontHeader}date={date} pattern="eeee"/>
    <CalendarHeader addStyle={styles.currentDate} date={date} pattern="dd"/>     
           
    </div>
    ;  
}

CalendarDay.propTypes={
  date:PropTypes.object.isRequired,
}
export default CalendarDay;
