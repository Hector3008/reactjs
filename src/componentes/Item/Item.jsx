import { Link } from "react-router-dom"
import "./Item.css"


const Item = ({id, nombre, precio, img,categoria, stock}) => {
  
  const verDetalles = ()=>{
      
    }
  
  return (
    <div className="ItemCard">
      <p>({categoria})</p>
      <img className="imagenItem" src={img} alt={nombre} />
      <h3> {nombre}</h3>
      <h4>{precio}$</h4>
      <p> id: {id} </p>
      {stock > 0 ? (
        <p style={{ color: "green" }}>disponible</p>
      ) : (
        <p style={{ color: "red" }}>*no disponible*</p>
      )}
      <Link to={`/item/${id}`}>
        {" "}
        <button className="detallesBtn" onClick={verDetalles}>ver detalles</button>{" "}
      </Link>
    </div>
  );
}

export default Item