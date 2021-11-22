import React, { Component } from 'react';
import './style.css';
import CalendarDay from './CalendarDay';
import CalendarMonth from './CalendarMonth';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state={
      date:new Date(),
    }
  }
  
  render() {
    
    const {date} = this.state;     
    return (
      <section className='calendar-wrapper'>
        <CalendarDay   date={date}/>
        <CalendarMonth date={date}/>
      </section>
    );
  }
}

export default Calendar;
