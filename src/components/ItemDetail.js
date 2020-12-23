import React,{useState, useEffect} from 'react';

 function ItemDetail(props){

const [count, setCount] = useState(0)

useEffect(()=>{
  if(count < 0){
    setCount(0)
  }else{
    if(count > 10){
      setCount(10)
    }
  }
},[count]) 

  return(
    <div>
    <h6>{props.nombre}</h6>
    <span>Precio: {props.precio}</span><br></br>
    <input type="button" value="+" onClick={()=>setCount(count+1)}/>
    {count}
    <input type="button" value="-" onClick={()=>setCount(count-1)}/>
    </div>
  )
}
export default ItemDetail;