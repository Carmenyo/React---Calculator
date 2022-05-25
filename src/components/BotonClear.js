import React from "react";
import "../styles/layout/_botonClear.scss"

const BotonClear = (props) => (
    <div className="boton-clear" 
    onClick={props.manejarClear}>
    {props.children}
    </div>
)

export default BotonClear;