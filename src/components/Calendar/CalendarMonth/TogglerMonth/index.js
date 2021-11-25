import React from 'react';
import styles from '../TogglerMonth/TogglerMonth.module.scss'

const TogglerMonth = (props) => {
  const btnHandler = (value) =>{

  }
  return (
    <div>
      <button className={styles.btn} onClick={btnHandler} value='prev'>Prev month</button>
      <button className={styles.btn} onClick={btnHandler} value='next'>Next month</button>
    </div>
  );
}

export default TogglerMonth;
