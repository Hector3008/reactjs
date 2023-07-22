import Navbar from "./componentes/Nav/Navbar";
import Footer from "./componentes/Footer/Footer";
import Error from "./componentes/Error/Error";
import Contacto from "./componentes/Form/Form";

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import Cart from "./componentes/Cart/Cart";
//import Catalog from "./componentes/Catalog/Catalog";
import Checkout from "./componentes/Checkout/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/categoria/:idCat" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="*" element={<Error />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
