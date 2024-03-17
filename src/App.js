import React from "react";
import "./App.css";
import Opiniones from "./componentes/opinion";
import datos from "./componentes/datos";

function App() {
  const dato = datos();

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>
          Esto es lo que dicen los Developers sobre como fue su desarrollo:
        </h1>
        <div className="texto-comentario1">
          <Opiniones
            nombre={`${dato[0].nombre}`}
            imagen={`${dato[0].imagen}`}
            pais={`${dato[0].pais}`}
            cargo={`${dato[0].cargo}`}
            empresa={`${dato[0].empresa}`}
            opinion={`${dato[0].opinion}`}
          />
        </div>
        <div className="texto-comentario2">
          <Opiniones
            nombre={`${dato[1].nombre}`}
            imagen={`${dato[1].imagen}`}
            pais={`${dato[1].pais}`}
            cargo={`${dato[1].cargo}`}
            empresa={`${dato[1].empresa}`}
            opinion={`${dato[1].opinion}`}
          />
        </div>
        <div className="texto-comentario3">
          <Opiniones
            nombre={`${dato[2].nombre}`}
            imagen={`${dato[2].imagen}`}
            pais={`${dato[2].pais}`}
            cargo={`${dato[2].cargo}`}
            empresa={`${dato[2].empresa}`}
            opinion={`${dato[2].opinion}`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
