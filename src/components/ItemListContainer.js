import React from 'react';
import ItemList from './ItemList';




function ItemListContainer() {
  

    let stock=10;

    const handleAdd = (counter) =>{

        
        return()=>{    
        if(stock <= 0){
            alert("no hay stock")
        }else{
            alert(`se van a agregar ${counter}`) 
               }
    }
    }

    return (
        <div class="card">
          <div class="card-body">
                   <ItemList />    
</div>
</div>
    );
       
}


export default ItemListContainer;


