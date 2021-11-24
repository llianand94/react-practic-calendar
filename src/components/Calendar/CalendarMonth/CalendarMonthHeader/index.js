import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import styles from './CalendarMonthHeader.module.scss';

function CalendarMonthHeader (props) { 
    return <h2 className={styles.header}>{format(props.date, "MMMM yyy")}</h2>;
  }


CalendarMonthHeader.propTypes = {
  date: PropTypes.object,
};


export default CalendarMonthHeader;
