import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';


function CalendarMonthHeader (props) { 
    return <h2 className="header">{format(props.date, "eeee yyy")}</h2>;
  }


CalendarMonthHeader.propTypes = {
  date: PropTypes.object,
};


export default CalendarMonthHeader;
