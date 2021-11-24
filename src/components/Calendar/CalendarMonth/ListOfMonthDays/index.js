import React, { Component } from 'react';
import { getDaysInMonth, startOfMonth, getDay } from 'date-fns';
import styles from './ListOfMonthDays.module.scss';
import classNames from 'classnames';


class ListOfMonthDays extends Component {
  
  createArray=(length)=>{
    const array = [];    
    for(let i=1; i<=length; i++){
      array[i] = i;
    }
    return array;
  }

  
  renderItems= (length,isEmpty=false,style)=>
      this.createArray(length)
      .map((item,id)=>{  
        if(isEmpty){
          return <li key={id} 
          className={style}>{item}</li>
        }
        return <li key={id} 
              className={style}>{item}</li>
      }
  )
  
  render() {
    const emptySell = classNames(styles.items, styles.borderCell, styles.empty);
    const normalSell = classNames(styles.items, styles.borderCell);
    const ulStyle = classNames(styles.list, styles.flexWrap);
    console.log(emptySell);
    const {date} = this.props;
    return <ul className={ulStyle}>
      {this.renderItems(getDay(startOfMonth(date)),true,emptySell)}
      {this.renderItems(getDaysInMonth(date),false, normalSell)}
      
      </ul>;

  }
}





export default ListOfMonthDays;
