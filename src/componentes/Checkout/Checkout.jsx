import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { db } from "../../services/config";
import { Link } from "react-router-dom";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { cart, cartToEmpty, cantidadTotal } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");
  const [mailConfirmation, setMailConfirmation] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const FormHandler = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !mail || !mailConfirmation) {
      setError("*por favor completa todos los campos*");
      return;
    } else if (mail !== mailConfirmation) {
      setError("*los campos del email no coinciden*");
      return;
    }

    const order = {
      items: cart.map((prod) => ({
        id: prod.item.id,
        nombre: prod.item.nombre,
        cantidad: prod.cantidad,
      })),
      total: cantidadTotal,
      nombre,
      apellido,
      telefono,
      mail,
      fecha: new Date(),
    };

    Promise.all(
      order.items.map(async (orderProd) => {
        const pRef = doc(db, "catalogo", orderProd.id);
        const pDoc = await getDoc(pRef);
        const actStock = pDoc.data().stock;

        await updateDoc(pRef, {
          stock: actStock - orderProd.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            cartToEmpty();
          })
          .catch((e) => {
            console.log(e);
            setError("*error al crear la orden*");
          });
      })
      .catch((e) => {
        console.log(e);
        setError("*error al actualizar el stock*");
      });
  };
  return (
    <div className="checkoutForm">
      {!orderId && (
        <form onSubmit={FormHandler}>
          {cart.map((p) => (
            <div>
              <p>
                {p.item.nombre} x {p.cantidad}{" "}
              </p>
              <p>${p.item.precio}</p>
              <hr />
            </div>
          ))}
          <hr />
          <div>
            <label htmlFor="nombre"> nombre: </label> <br />
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="apellido">apellido: </label> <br />
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="telefono">telefono: </label> <br />
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mail">mail: </label> <br />
            <input
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mailConfirmation">mail confirmation: </label> <br />
            <input
              type="email"
              value={mailConfirmation}
              onChange={(e) => setMailConfirmation(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <hr />
          <div className="buttons">
            <Link to="/cart">
              <button style={{ color: "red" }}>volver al carrito</button>
            </Link>
            <button style={{ color: "green" }} type="submit">
              finalizar compra:{" "}
            </button>
          </div>
        </form>
      )}

      {orderId && (
        <div className="orderTicket">
          <p>¡gracias por tu compra, {nombre}!</p>
          <p>tu orden es ({orderId}) </p>
          <p>

            
            fecha: ({new Date().getDate()}/{new Date().getMonth()}/
            {new Date().getFullYear()})
          </p>
        </div>
      )}
    </div>
  );
};

export default Checkout;