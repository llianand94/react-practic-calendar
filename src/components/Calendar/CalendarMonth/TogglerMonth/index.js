import React from 'react';
import styles from '../TogglerMonth/TogglerMonth.module.scss'
import classNames from 'classnames';

const TogglerMonth = (props) => {  
  const {changeMonth} = props;
  const btnClass = classNames(styles.btn, styles.borderCell);
  return (
    <div className={styles.btnWrapper}>
      <button className={btnClass} onClick={(e)=>changeMonth(e.target.value)} value={false}>Prev month</button>
      <button className={btnClass} onClick={(e)=>changeMonth(e.target.value)} value={true}>Next month</button>
    </div>
  );
}

export default TogglerMonth;
