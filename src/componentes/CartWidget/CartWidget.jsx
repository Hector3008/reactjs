import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    const {cantidadTotal} = useContext(CartContext)

    return (
      <div className='cartWidget'>
        <Link to="/cart">
          <img
            className="cartItem"
            src="../../public/img/cartItem.png"
            alt="cartItem"
          />
          {cantidadTotal > 0 && (
            <strong className="CounterCartNum"> {cantidadTotal}</strong>
          )}
        </Link>
      </div>
    );
}

export default CartWidget