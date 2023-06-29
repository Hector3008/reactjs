import React from 'react'

import { useState } from 'react'

const ItemCounter = ({ initial, stock, toAdd }) => {
    const [counter, setCounter] = useState(initial);


    const incrementar = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decrementar = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <div>
                <button onClick={decrementar}> - </button>
                <p> {counter} </p>
                <button onClick={incrementar}> + </button>
            </div>
            <button onClick={() => toAdd(counter)}> Agregar al Carrito </button>
        </>
    )
}

export default ItemCounter