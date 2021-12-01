
 const createArray=(length)=>{
  const array = [];    
  for(let i=1; i<=length; i++){
    array[i] = i;
  }
  return array;
} 

export default createArray;