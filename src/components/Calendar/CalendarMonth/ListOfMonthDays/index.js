import React, { Component } from 'react';
import { getDaysInMonth, startOfMonth, getDay } from 'date-fns';


class ListOfMonthDays extends Component {
  
  createArray=(length)=>{
    const array = [];    
    for(let i=1; i<=length; i++){
      array[i] = i;
    }
    return array;
  }

  renderItems= (length,isEmpty=false)=>
    this.createArray(length)
      .map((item,id)=>{  
        if(isEmpty){
          return <li key={id} 
          className='items borderCell empty'>{item}</li>
        }
        return <li key={id} 
              className='items borderCell'>{item}</li>
      }
  )
  
  render() {
    const {date} = this.props;
    return <ul className="list flex-wrap">
      {this.renderItems(getDay(startOfMonth(date)),true)}
      {this.renderItems(getDaysInMonth(date))}
      
      </ul>;

  }
}





export default ListOfMonthDays;
