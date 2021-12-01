import React from 'react';
import { getDaysInMonth, startOfMonth, getDay,getDate, isSameMonth } from 'date-fns';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './ListOfMonthDays.module.scss';
import createArray from '../../../../helpers/index'


const  ListOfMonthDays =(props)=> {
  const {date,currentDate} = props;  
  const emptyCell = classNames(styles.items,  styles.empty);
  const normalCell = classNames(styles.items, styles.borderCell);
  const ulStyle = classNames(styles.listMonth, styles.flexWrap);
  const isCurrMonthAndDay =(item)=> isSameMonth(date, currentDate)&&getDate(currentDate)===item;
  
  const createCellsByArray= (length,{isEmpty,style})=>{
    return createArray(length)
      .map((item,id)=>{  
        if(isEmpty){
          return <li key={id} 
          className={style}>{item}</li>
        }        
        return <li key={id} 
              className={classNames(style, (isCurrMonthAndDay(item))?styles.currentDay:null)}>{item}</li>
      }
  )}   
  return <ul className={ulStyle}>
      {createCellsByArray(getDay(startOfMonth(date)),{isEmpty:true, style:emptyCell})}
      {createCellsByArray(getDaysInMonth(date),{isEmpty:false, style:normalCell})}      
    </ul>;  
}

ListOfMonthDays.propTypes={
  date:PropTypes.object.isRequired
}

export default ListOfMonthDays;
