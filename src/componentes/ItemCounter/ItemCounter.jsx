
import { useState } from 'react'

const ItemCounter = ({ initial, stock, funcionToAdd }) => {
  const [counter, setCounter] = useState(initial);

  const incrementar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrementar = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <button onClick={decrementar}> - </button>
        <p> {counter} </p>
        <button onClick={incrementar}> + </button>
      </div>
      <button style={{color: 'green',margin: '1rem'}} onClick={() => funcionToAdd(counter)}>
        {" "}
        Agregar al Carrito{" "}
      </button>
    </>
  );
};

export default ItemCounter