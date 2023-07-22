import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <img
          className="logo"
          src="../public/img/bikeshop.png"
          alt="bikeshoplogo"
        />
      </Link>
      <ul>
        <li>
          <NavLink className="category" to={"/categoria/1"}>
            productos
          </NavLink>
        </li>
        <li>
          <NavLink className="category" to={"/categoria/2"}>
            servicios
          </NavLink>
        </li>
        <li>
          <NavLink className="category" to={"/contacto"}>
            contacto
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </header>
  );
}

export default Navbar