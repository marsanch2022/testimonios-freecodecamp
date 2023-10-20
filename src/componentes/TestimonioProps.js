import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} // Plantillas Literales JavaScript Comillas Invertidas
        alt={(`Foto de ${props.imagen}`)} />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong>
          </p>
          <div className='texto-testimonio'>
            {props.testimonio}
          </div>
        </div>
    </div>
  );
}

export default Testimonio;