import React, { Component } from 'react';

import CalendarDay from './CalendarDay';
import CalendarMonth from './CalendarMonth';
import styles from './Calendar.module.scss';
import { setMonth } from 'date-fns';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state={
      date:new Date(),
    }
  }
  
  render() {    
    const {date} = this.state; 
    const getAnotherMonth = setMonth(date,9);    
    return (
      <section className={styles.calendarWrapper}>
        <CalendarDay   date={getAnotherMonth}/>
        <CalendarMonth date={getAnotherMonth}/>
      </section>
    );
  }
}

export default Calendar;
