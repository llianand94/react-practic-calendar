import React, { Component } from 'react';
import { getDaysInMonth } from 'date-fns';


class ListOfMonthDays extends Component {
  
  createArray=(length)=>{
    const array = [];    
    for(let i=0; i<=length; i++){
      array[i] = i;
    }
    return array.map((item)=><li key={item} className='items border-table'>{item}</li>)   

  }
  render() {
    const {date} = this.props;
    return <ul className="list flex-wrap">
      {this.createArray(getDaysInMonth(date))}
      </ul>;
  }
}





export default ListOfMonthDays;
