import React, { Component } from 'react';
import './style.css';
import CalendarDay from './CalendarDay';
import CalendarMonth from './CalendarMonth';
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
      <section className='calendar-wrapper'>
        <CalendarDay   date={getAnotherMonth}/>
        <CalendarMonth date={getAnotherMonth}/>
      </section>
    );
  }
}

export default Calendar;
