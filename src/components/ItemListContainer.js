import React from 'react';
import ItemCount from "./ItemCount";


function ItemListContainer() {

    const handleAdd = () =>{

    }

    return (
        <div class="card">
          <div class="card-body">
             <ItemCount onAdd={handleAdd} stock={8} inicial={2}  />
</div>
</div>
    );
}

export default ItemListContainer;


