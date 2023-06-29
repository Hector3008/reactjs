import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {
  return (
    <header>
      <Link to="/">
      <h1 className="logo">Tienda</h1>
      </Link>
      <ul>
        <li>
          <NavLink to={"/categoria/1"}>productos</NavLink>
        </li>
        <li>
          <NavLink to={"/categoria/2"}>servicios</NavLink>
        </li>
      </ul>
      <CartWidget/>

    </header>
  )
}

export default Navbar