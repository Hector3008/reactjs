import { useState, useEffect } from "react"

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";


import './itemDetailContainer.css'



const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const {idItem} = useParams();

  useEffect(() => {
    const ndoc = doc(db, 'catalogo', idItem);
    getDoc(ndoc).then(
      r=>{
        const data = r.data();
        const nItem = {id: r.id, ...data};
        setItem(nItem)
      }
    )
    .catch(e=>console.log(e))

  }, [idItem]);
  
  return (
    <div className="itemDetailContainer">
    <ItemDetail {...item}/>
    </div>
  )
}

export default ItemDetailContainer