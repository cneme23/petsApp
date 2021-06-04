import React from "react";
import Boton from "../Boton/Boton";
import "./ContainerHome.css";
const ContainerHome = () => {
  const accion = (texto) => {
    alert(texto);
  };

  return (
    <div>
      {/* En el caso que yo quiera pasar un valor preciso por props tengo que usar una arrow function
        De lo contrario tendria que pasar solo {el nombre de la funcion} */}
     
      <div className="top-buttons">
        <Boton texto="Show my dogs" accion={() => accion("Show my dog")} />
        <Boton texto="Show api dogs" accion={() => accion("Show api dogs")} />
        <Boton texto="Show all dogs" accion={() => accion("Show all dogs")} />
      </div>

      <div>
        <input className="input-center" />
      </div>

      <div className="row">
        
        <div className="left-col">
          <h3>Sort by</h3>
          <Boton texto="A-Z" />
          <Boton texto="Z-A" />
          <Boton texto="Descending weight" />
          <Boton texto="Ascending weight" />
        </div>

        <div className="right-col">
          <select>
            <option>opcion 1</option>
          </select>
        </div>
      
      </div>
    </div>
  );
};
export default ContainerHome;
