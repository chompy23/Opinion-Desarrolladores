import React from "react";
import "../hojas de Estilo/opinion.css";

function Opiniones(props) {
  return (
    <div className="contenedor-opiniones">
      <img
        className="contenedor-imagenes"
        src={require(`../imagenes/${props.imagen}.png`)}
                alt={`"Foto de" ${props.nombre}`} />
            <div className="contenedor-texto-opiniones">
        <p className="lugar-pais">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="puesto-developer">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-comentario">"{props.opinion}"</p>
      </div>
    </div>
  );
}
export default Opiniones;
