import React from "react";

 export function Temple(props) {
  return (

    <div className="temple">

        <img className='temple-image'
        src= {(`/public/imagen-${props.imagen}.jpg`)} 
        alt='imagen' />

        <div className="temple-description">

          <p className="Nombre"> {props.nombre}  </p>

          <p className="Apodo"> "{props.apodo}" </p>

          <p className="Frase"> "{props.frase}" </p>

        </div>

    </div>

  );
}
