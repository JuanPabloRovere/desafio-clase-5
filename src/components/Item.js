import React from "react";

function Item(props) {
  return (
    <div class="card">
    <div class="card-body">
        <h5 class="display-5">{props.nombre}</h5>
        <li class="list-group-item">Precio: {props.precio}</li>
        <li class="list-group-item">Categoría {props.categoria}</li>
      <hr></hr>
    </div></div>
  );
}

export default Item;