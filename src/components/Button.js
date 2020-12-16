import React from "react";

const style = {
    width: 50,
    height: 50,
    backgroundColor:"white",
}



export default function Button({suma, onClick, counter, setCounter}){

    let sign = suma ? "+" : "-";

    let amount = suma ? (counter + 1) : (counter -1);

    return(
        <button type="button" class="btn btn-primary btn-sm"onClick={onClick(amount)}>{sign}</button>
        )
}