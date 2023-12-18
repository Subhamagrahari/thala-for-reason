 function Validation(values){
  let reason="";
  if(values.name.length<=7)
  {
    reason= "no thala for you";
  }
  else{
    reason="";
  }
  
  return reason;
 }

 export default Validation;