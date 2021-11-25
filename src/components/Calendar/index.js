import React, { Component } from 'react';

import CalendarDay from './CalendarDay';
import CalendarMonth from './CalendarMonth';
import styles from './Calendar.module.scss';
import { setMonth, getMonth } from 'date-fns';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state={
      date:new Date(),
    }
  }
  changeMonth = (value) =>{
    const stepMonth = value==='true'?1:(-1);    
    this.setState((prevState,prevProps)=>{
      const currMounth = getMonth(prevState.date);
      return {
        date:setMonth(prevState.date, currMounth+(stepMonth))
        }
      }
    )      
  }
 
  render() {    
    const {date} = this.state;       
    return (
      <section className={styles.calendarWrapper}>
        <CalendarDay   date={date}/>
        <CalendarMonth changeMonth={this.changeMonth}  date={date}/>
      </section>
    );
  }
}

export default Calendar;
