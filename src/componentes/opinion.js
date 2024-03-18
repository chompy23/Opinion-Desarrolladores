import React from "react";
import "../hojas de Estilo/opinion.css";
var index;
function cadenas(cade,index) {
  return cade.slice(0, (52 - index));
}

function Opiniones(props) {
  const cade = props.opinion;
  
  return (
    <div className="contenedor-opiniones">
      <img
        className="contenedor-imagenes"
        src={require(`../imagenes/${props.imagen}.png`)}
        alt={`"Foto de" ${props.nombre}`}
      />
      <div className="contenedor-texto-opiniones">
        <p className="lugar-pais">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="puesto-developer">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-comentario">"<strong>{cadenas(cade,0)}</strong>{cade.replace(cadenas(cade, 0),"")}"</p>
      </div>
    </div>
  );
}
export default Opiniones;
