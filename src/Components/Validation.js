 function digitsum(num)
 {
  var sum=0;
  while(num)
  {
    let re=num%10;
    sum=sum+re;
    num=Math.floor(num/10);
  }
  return sum;
 }
 
 
 
 function Validation(values){
  let reason="";
  if(values.name.length<7)
  {
    let result= digitsum(values.name);
    if(result===7)
    {
      reason="=7 THALA for reason"
    }
    else{
      reason="No thala for you"
    }
  }
  else if(values.name.length===7){
    reason="=7 THALA for reason";
  }
  else if(values.name===7){
    reason="=7 THALA for reason";
  }
 else
 {
  reason="";
 }
  return reason;
 }

 export default Validation;