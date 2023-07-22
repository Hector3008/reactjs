import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const CartItem = ({item, cantidad}) => {
  const {prodToDelete}=useContext(CartContext);
  const subtotal = item.precio * cantidad
  return (
    <div>
      <h4>{item.nombre}</h4>
      <p>{item.precio}$</p>
      <p>cantidad: {cantidad}</p>
      <p>subtotal: {subtotal}</p>
      <button style={{color:'red'}} onClick={() => prodToDelete(item.id)}>eliminar producto</button>
      <br />
    </div>
  );
}

export default CartItem