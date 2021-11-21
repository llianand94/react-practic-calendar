import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <section>
        <CalendarDay/>
        <CalendarMonth/>
      </section>
    );
  }
}

export default Calendar;
