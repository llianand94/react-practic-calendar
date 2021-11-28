import React from 'react';
import { getDaysInMonth, startOfMonth, getDay,getDate } from 'date-fns';
import styles from './ListOfMonthDays.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import createArray from '../../../../api/index'


const  ListOfMonthDays =(props)=> {
  const {date} = props;
  const currentDate = getDate(date);  
  const emptyCell = classNames(styles.items, styles.borderCell, styles.empty);
  const normalCell = classNames(styles.items, styles.borderCell);
  const ulStyle = classNames(styles.listMonth, styles.flexWrap);

  const createCellsByArray= (length,{isEmpty,style,currentDate})=>
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
  
  return <ul className={ulStyle}>
      {createCellsByArray(getDay(startOfMonth(date)),{isEmpty:true,style:emptyCell})}
      {createCellsByArray(getDaysInMonth(date),{isEmpty:false, style:normalCell,currentDate:currentDate})}      
    </ul>;  
}


ListOfMonthDays.propTypes={
  date:PropTypes.object.isRequired
}


export default ListOfMonthDays;
