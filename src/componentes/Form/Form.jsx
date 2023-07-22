import { useState } from "react";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Form.css'

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const FormHandler = (e) => {
    e.preventDefault();

    addDoc(collection(db, "mensajes"), {
      nombre: nombre,
      email: mail,
      mensaje: mensaje,
    });
    setNombre("");
    setMail("");
    setMensaje("");
  };

  return (
    <div className="formulario">
      <form onSubmit={FormHandler}>
        <label htmlFor="">nombre</label> <br />
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">correo</label> <br />
        <input
          type="email"
          name="mail"
          id="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="mensaje">mensaje</label> <br />
        <input
          type="text"
          size="3000"
          style={{height:'4rem'}}
          name="mensaje"
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />{" "}
        <br />
        <button style={{color:'green'}} type="submit">enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
