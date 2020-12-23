import React from "react";
import { Link } from "react-router-dom";

export default Item;


function Item(props) {
  return (
    <div className="item">
    <div class="card-body">
        <Link
          to={{ pathname: `/itemdetail/${props.id}`, state: { test: "test" } }}
        >
          <h5 class="display-5">{props.nombre}</h5>
        </Link>
        <li class="list-group-item">Precio: {props.precio}</li>
        <li class="list-group-item">Categoría {props.categoria}</li>
        <hr />
      </div>
    </div>
  );
}