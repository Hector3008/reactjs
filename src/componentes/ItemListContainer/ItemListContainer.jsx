import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"

import { useParams } from "react-router-dom"

import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/config"

const ItemListContainer = () => {

  const [items, setItems]=useState([]);
  
  const {idCat} = useParams();

  useEffect(()=>{
    const misItems = idCat
      ? query(collection(db, "catalogo"), where("idCat", "==", idCat)) : collection(db, "catalogo");
      getDocs(misItems)
      .then(r=>{
        const nItems=r.docs.map(doc=>{
          const data = doc.data();
          return {id:doc.id, ...data}
        })
        setItems(nItems);
      })
      .catch(e=>console.log(e))
  },[idCat])

  return (
    <>
    <ItemList items={items}/>
    </>
  )
}

export default ItemListContainer