const items = [
  {id: "1", nombre: "bicicletas", precio: 500, img: "../../public/img/bicicletas.jpg", categoria: "producto", idCat: "1"},
  {id: "2", nombre: "pintado", precio: 500, img: "../../public/img/pintado.jpg", categoria: "servicio", idCat: "2"},
  {id: "3", nombre: "manubrios", precio: 500, img: "../../public/img/manubrios.jpg", categoria: "producto", idCat: "1"},
  {id: "4", nombre: "mantenimiento", precio: 500, img: "../../public/img/mantenimiento.jpg", categoria: "servicio", idCat: "2"},
  {id: "5", nombre: "ruedas", precio: 500, img: "../../public/img/ruedas.jpg", categoria: "producto", idCat: "1"},
  {id: "6", nombre: "personalizado", precio: 500, img: "../../public/img/personalizado.jpg", categoria: "servicio", idCat: "2"},
]

export const getItems = ()=>{
  return new Promise((res)=>{
    setTimeout(()=>{
      res(items)
    }
    ,2000)
  })
}

export const getOneItem = (id) =>{
  return new Promise((res)=>{
    setTimeout(()=>{
      const item = items.find(e=>e.id===id);
      res(item);
    }, 2000)
  })
}

export const getByCategoria = (idCat)=>{
  return new Promise(r=>{
    setTimeout(()=>{
      const ItemsByCategoria=items.filter(e=>e.idCat === idCat);
      r(ItemsByCategoria)
    }, 2000)
  })
}