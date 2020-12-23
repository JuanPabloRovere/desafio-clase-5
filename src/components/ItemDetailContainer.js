import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

//Este componente contiene la vista de un sólo producto al que llegamos después de hacer click sobre el mismo en ItemList. Toma el id del link y hace el fecth para traer la info de ese solo producto. Usa esa info para mapear en compoennte hijo => ItemDetail.
function ItemDetailContainer(props) {
  const [item, setItem] = useState(false);
  let id = props.match.params.id;

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items/${id}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          setItem(data);
        });
    }, 3000);
    console.log(item);
  }, []); //Esto se ejecuta apenas se monta el componente / onInit

  return (
    <div>
      {item ? (
        <ItemDetail nombre={item.nombre} precio={item.precio} />
      ) : (
        <p>Trayendo información desde base de datos...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
