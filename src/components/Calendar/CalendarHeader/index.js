import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import styles from './CalendarHeader.module.scss';
import classNames from 'classnames';

function CalendarHeader ({date,pattern, addStyle}) { 
    return <h2 className={classNames(styles.header, addStyle)}>{format(date, pattern)}</h2>;
  }


  CalendarHeader.propTypes = {
  date: PropTypes.object.isRequired,
  pattern: PropTypes.string.isRequired,
  addStyle: PropTypes.string,
};


export default CalendarHeader;

