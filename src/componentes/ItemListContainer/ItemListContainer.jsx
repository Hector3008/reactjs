import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getItems, getByCategoria } from "../../asynmock"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [items, setItems]=useState([]);
  
  const {idCat} = useParams();

  useEffect(()=>{
    const ItemsFunction = idCat? getByCategoria: getItems;

    ItemsFunction(idCat).then(r=>setItems(r)).catch(e=>console.log(e))
  },
  [idCat])

  return (
    <>
    <ItemList items={items}/>
    </>
  )
}

export default ItemListContainer