import './ItemDetail.css'

const ItemDetail = ({id,nombre,precio,img,categoria,idCat}) => {
  return (
    <div>
    <p>(categria: {categoria}) (idCategoria: {idCat})</p>
    <img className='imagenItemDetail' src={img} alt={nombre} />
    <h2>{nombre}</h2>
    <h2>{precio}</h2>
    <h4>{id}</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam autem sit dolorum eligendi voluptatum reprehenderit maiores nam deserunt aliquid eius. Deleniti porro iusto suscipit ut ullam consequuntur repellendus a aspernatur.</p>

    </div>
  )
}

export default ItemDetail