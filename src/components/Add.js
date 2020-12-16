import React from "react";

let style ={
    width: 100,
    height: 30,
    textAlign:"center",
    backgroundColor:"blue",
    cursor:"pointer",
    marginTop:10,
    margin:"5px auto",
}

export default function Add({onAdd, counter}){
    return(
        <button type="button" class="btn btn-primary btn-sm" {...{style}}onClick={onAdd(counter)}>Agregar</button>
        )
}