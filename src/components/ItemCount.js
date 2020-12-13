import React from "react";

const Contador = () => {
  const [contador, setContador] = React.useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
    if(contador > 9){
        return(setContador(10))
    }
  };

  const restarContador = () => {
    setContador(contador - 1)
    if (contador < 1 ){
        return(setContador(0));
    };
  };

  const resetiar = () => {
    setContador(0);
  };

  return (
    <>
      <p>Remera {contador}</p>
      <button type="button" class="btn btn-primary btn-sm" onClick={aumentarContador}>+</button>
      <button type="button" class="btn btn-primary btn-sm" onClick={resetiar}>0</button>
      <button type="button" class="btn btn-primary btn-sm" onClick={restarContador}>-</button>
 
    </>
  );
};

export default Contador;