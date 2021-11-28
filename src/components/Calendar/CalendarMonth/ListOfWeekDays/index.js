import React from 'react';
import styles from './ListOfWeekDays.module.scss';

const ListOfWeekDays = () => {
  const str ='SMTWTFS';
  const createWeek =[...str].map((letter,id)=>{
    return (
    <li key={id} id={id} className={styles.items}>{letter}</li>)
  })
  return (
    <ul className={styles.listDays}>
      {createWeek}      
    </ul>
  );
}

export default ListOfWeekDays;
