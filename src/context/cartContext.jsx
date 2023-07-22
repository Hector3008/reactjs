import { useState, createContext } from "react";

export const CartContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  console.log(cart);

  const addProd = (item, cantidad) => {
    const prodExist = cart.find((prod) => prod.item.id === item.id);

    if (!prodExist) {
      setCart((prev) => [...prev, { item, cantidad }]);

      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    } else {
      const cartAct = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCart(cartAct);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => item.precio * cantidad);
    }
  };

  const prodToDelete = (id) => {
    const prodDeleted = cart.find((prod) => prod.item.id === id);
    const cartAct = cart.filter((prod) => prod.item.id !== id);
    setCart(cartAct);
    setCantidadTotal((prev) => prev - prodDeleted.cantidad);
    setTotal((prev) => prev - prodDeleted.item.precio * prodDeleted.cantidad);
  };

  const cartToEmpty = () => {
    setCart([]);
    setCantidadTotal(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, cantidadTotal, addProd, prodToDelete, cartToEmpty }}
    >
      {children}
    </CartContext.Provider>
  );
};
