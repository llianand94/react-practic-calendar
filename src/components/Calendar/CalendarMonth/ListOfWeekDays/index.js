import React from 'react';

const ListOfWeekDays = () => {
  const str ='SMTWTFS';
  const createWeek =[...str].map((letter,id)=>{
    return (
    <li key={id} id={id} className="items">{letter}</li>)
  })
  return (
    <ul className="list">
      {createWeek}      
    </ul>
  );
}

export default ListOfWeekDays;
