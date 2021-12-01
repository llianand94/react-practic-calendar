import React from 'react';
// import { format } from 'date-fns';
import styles from './CalendarSectionOfDay.module.scss';
import PropTypes from 'prop-types';
import CalendarHeaderItem from '../CalendarHeaderItem';

const CalendarSectionOfDay =({date,currentDate})=> {  
  return <div className={styles.sectionCalendarDay}>
    <CalendarHeaderItem addStyle={styles.fontHeader} date={currentDate} pattern="eeee"/>
    <CalendarHeaderItem addStyle={styles.currentDate} date={currentDate} pattern="dd"/>     
           
    </div>
    ;  
}

CalendarSectionOfDay.propTypes={
  date:PropTypes.object.isRequired,
}
export default CalendarSectionOfDay;
