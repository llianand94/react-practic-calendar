import React, { Component } from 'react';

import CalendarSectionOfDay from './CalendarSectionOfDay';
import CalendarSectionOfMonth from './CalendarSectionOfMonth';
import styles from './Calendar.module.scss';
import { setMonth, getMonth } from 'date-fns';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state={
      date:new Date(),
      currentDate:new Date(),
    }
  }
  changeMonth = ({target:{value}}) =>{
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
    const {date,currentDate} = this.state;       
    return (
      <section className={styles.calendarWrapper}>
        <CalendarSectionOfDay   currentDate={currentDate} date={date}/>
        <CalendarSectionOfMonth currentDate={currentDate} changeMonth={this.changeMonth}  date={date}/>
      </section>
    );
  }
}

export default Calendar;
