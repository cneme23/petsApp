import React from "react";
const Boton = ({texto,accion,type}) => {
    
    return (
        <button type={type}  onClick={accion}>{texto}</button>
    )
}


export default Boton ;