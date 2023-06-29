import { useState, useEffect } from "react"
import { getOneItem } from "../../asynmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const {idItem} = useParams();

  useEffect(()=>{
    getOneItem(idItem).then(r=>setItem(r)).catch(e=>console.log(e))
  }, [idItem])
  return (
    <>
    <ItemDetail {...item}/>
    </>
  )
}

export default ItemDetailContainer