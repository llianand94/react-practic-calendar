import React from 'react';
import { format } from 'date-fns';
import styles from './CalendarDay.module.scss';
import PropTypes from 'prop-types';

const CalendarDay =(props)=> {  
  return <div className={styles.sectionCalendarDay}>
            <h1 className={styles.header}>
              {format(props.date, 'eeee')}</h1>
            <span  className={styles.currentDate}>
              {format(props.date, 'dd')} </span>
      </div>
    ;  
}

CalendarDay.propTypes={
  date:PropTypes.object.isRequired,
}
export default CalendarDay;
