import React from "react";
import Boton from "../Boton"
import "./Navbar.css"

const Navbar= () =>{
    return(
        <nav>
            <Boton texto="home"/>
            <Boton texto="create breed"/>

        </nav>
    )
}

export default Navbar;
