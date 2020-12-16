import React from "react";

const style = {
    width: 50,
    height: 50,
    backgroundColor:"white",
    margin:"5px auto",
    textAlign:"center",
    padding:15
}

export default function Display({value}){
    return(
        <div className="display" {...{style}}>{value}</div>
    
        )
}