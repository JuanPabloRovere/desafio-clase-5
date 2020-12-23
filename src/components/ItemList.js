import React,{useState, useEffect} from 'react';
import Item from './Item';

function ItemList(props){
  const [items, setItems] = useState(false);

  useEffect(()=>{
    setTimeout(()=> {
      fetch("https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items") //Api del tutor JP
        .then((response)=> {
          return response.json();
        })
        .then((data)=>{
          setItems(data);
        });
    }, 2000);
  },[]) 
  
  return(
    <div>
    {items ? 
    items.map((i,index)=>(
     <div> <Item key={index} nombre={i.nombre} precio={i.precio} categoria={i.categoria}/>
     </div>
     
    ))
    : 
<blockquote class="blockquote">
  <p>Buscando informacion...</p>
</blockquote>}
    </div>
  )
}

export default ItemList;