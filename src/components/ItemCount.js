import React, {useState} from "react";
import Display from "./Display";
import Button from "./Button";
import Add from "./Add";

const style = {
  margin:"100 px auto",
  width: 300,
  height: 100,
  backgroundColor:"black"
}

const upper ={
  display:"flex",
  justifyConten:"space-around"
}

export default function itemCount({onAdd, stock, inicial}){

let [counter, setCounter] = useState(inicial);

 const handleClick =(amount)=>{
   return(
     ()=>{
       let total = (amount < 0) ? 0:amount;
       let limiter = (total > stock) ? stock : total;
       setCounter(limiter);

     }
   )
 };

 let prop = {counter, setCounter}

  return(
    <div className="itemCount" {...{style}}>
      
    <div className="upper" style={upper}>
      <Button suma = {false} onClick={handleClick}{...{prop}} /> 
      <Display value={counter} /> 
      <Button suma = {true} onClick={handleClick}{...{prop}}/>
    </div>

    <div className="lower">
      <Add onAdd = {onAdd}/>
    </div>

    </div>
  )
}