import React from 'react';
import styles from '../TogglerMonth/TogglerMonth.module.scss'
import classNames from 'classnames';

const TogglerMonth = (props) => {  
  const {changeMonth} = props;
  const btnClass = classNames(styles.btn, styles.borderCell);
  return (
    <div className={styles.btnWrapper}>
      <button className={btnClass} onClick={(e)=>changeMonth(e)} value={false}>Prev</button>
      <button className={btnClass} onClick={(e)=>changeMonth(e)} value={true}>Next</button>
    </div>
  );
}

export default TogglerMonth;
