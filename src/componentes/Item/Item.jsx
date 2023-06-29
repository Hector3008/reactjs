import { Link } from "react-router-dom"
import "./Item.css"
import ItemCounter from "../ItemCounter/ItemCounter"
const Item = ({id, nombre, precio, img,categoria,idCat}) => {
  
  const verDetalles = ()=>{
      
    }
  
  return (

    <div className="ItemCard">
      <p>(categoria: {categoria}) (idCat: {idCat})</p>
      <img className="imagenItem" src={img} alt={nombre} />
      <h3> {nombre}</h3>
      <h4>{precio}</h4>
      <p> id: {id} </p>
      <Link to={`/item/${id}`}> ver detalles </Link>
      <button onClick={verDetalles}></button>
      <ItemCounter/>

    </div>
  )
}

export default Item