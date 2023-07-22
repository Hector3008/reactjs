import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {

  const {cart, cartToEmpty, total, cantidadTotal} =useContext(CartContext)

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>el carrito está vacío</h2>
        <Link to="/"> ver productos </Link>
      </>
    );
  }

  return (
    <div className="cartContainer">
      <div className="CartCardsContainer">
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
      </div>

      <h3>total: {total}$</h3>
      <h3>cantidad total: {cantidadTotal}</h3>
      <button
        style={{ color: "gray", margin: "1rem" }}
        onClick={() => cartToEmpty()}
      >
        vaciar carrito
      </button>
      <Link to="/checkout">
        <button style={{ color: "green", margin: "1rem" }}>
          finalizar compra
        </button>
      </Link>
    </div>
  );
}

export default Cart