import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";



function CartWidget() {
    return (        
<button type="button" class="btn btn-light">
    Carrito ({CartWidget.length})
    <div className="App" style={{fontSize:"1em", color:"black"}}>
    <FontAwesomeIcon icon={faShoppingCart}/></div>
    </button>
    );
}

export default CartWidget;