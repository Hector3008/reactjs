import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetail.css'
import { CartContext } from '../../context/cartContext'

const ItemDetail = ({id,nombre,precio,img,categoria,idCat, stock}) => {

  const [addQuantity, setAddQantity] = useState(0);

  const {addProd} = useContext(CartContext)

  const quantityHandler = (quantity) => {
    setAddQantity(quantity);
    
    const item = { id, nombre, precio };
    addProd(item, quantity);
  }
  return (
    <div className="itemContainer">
      <p>
        (categoria: {categoria}) (idCategoria: {idCat})
      </p>
      <img className="imagenItemDetail" src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <h2>{precio}$</h2>
      <h4>{id}</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam autem
        sit dolorum eligendi voluptatum reprehenderit maiores nam deserunt
        aliquid eius. Deleniti porro iusto suscipit ut ullam consequuntur
        repellendus a aspernatur.
      </p>

      {addQuantity > 0 ? (
        <div>
          <Link to="/cart">
            {" "}
            <button style={{ margin: "1rem", color: 'green' }}>terminar compra</button>
          </Link>
          <Link to="/">
            <button style={{ margin: "1rem", color: 'blue' }}>seguir comprando</button>
          </Link>
        </div>
      ) : (
        stock > 0 && (
          <ItemCounter
            initial={0}
            stock={stock}
            funcionToAdd={quantityHandler}
          />
        )
      )}
    </div>
  );
}

export default ItemDetail