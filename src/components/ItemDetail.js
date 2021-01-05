import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

function ItemDetail(props) {
  const [count, setCount] = useState(0);

  function giveMeCount(c) {
    setCount(c);
  }

  return (
    <div>
      <ItemCount
        func={giveMeCount}
        nombre={props.nombre}
        precio={props.precio}
      />
      <input type="button" value={`Comprar ${count}`} />
    </div>
  );
}
export default ItemDetail;
