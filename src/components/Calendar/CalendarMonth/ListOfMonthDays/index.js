import React from 'react';
import { getDaysInMonth, startOfMonth, getDay,getDate } from 'date-fns';
import styles from './ListOfMonthDays.module.scss';
import classNames from 'classnames';


const  ListOfMonthDays =(props)=> {
  const currentDate = getDate(props.date);  
  const createArray=(length)=>{
    const array = [];    
    for(let i=1; i<=length; i++){
      array[i] = i;
    }
    return array;
  }  
  const createCellsByArray= (length,isEmpty=false,style,currentDate)=>
      createArray(length)
      .map((item,id)=>{  
        if(isEmpty){
          return <li key={id} 
          className={style}>{item}</li>
        }
        return <li key={id} 
              className={classNames(style, currentDate===item?styles.currentDay:null)}>{item}</li>
      }
  )
  const emptyCell = classNames(styles.items, styles.borderCell, styles.empty);
  const normalCell = classNames(styles.items, styles.borderCell);
  const ulStyle = classNames(styles.list, styles.flexWrap);
  console.log(emptyCell);
  const {date} = props;
  return <ul className={ulStyle}>
      {createCellsByArray(getDay(startOfMonth(date)),true,emptyCell)}
      {createCellsByArray(getDaysInMonth(date),false, normalCell,currentDate)}      
    </ul>;  
}





export default ListOfMonthDays;
