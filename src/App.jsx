import Navbar from './componentes/Nav/Navbar'
import Footer from './componentes/Footer/Footer'

import Error from './componentes/Error/Error'

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

import { Route, Routes, BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:idCat" element={<ItemListContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<Error/>}/>
        
        
      </Routes>

      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App