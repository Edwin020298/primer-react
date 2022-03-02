import React, { memo, useState, useEffect } from "react";
import "./Recetario.css";
import RecetaT from "./components/RecetaT/RecetaT";
import CaloriasT from "./components/CaloriasT/CaloriasT";
import NombreT from "./components/NombreT/NombreT";
import Ingredientes from "./components/Ingredientes/Ingredientes";

const initialState = {
  nombre: "",
  ingredientes: [""],
  calorias: "",
  receta: "",
};
const Recetario = memo(() => {
  const [receta, setReceta] = useState(initialState);
  const [nombreReceta, setNombreReceta] = useState(receta.receta);
  const [nombreCalorias, setNombreCalorias] = useState(receta.Calorias);

  useEffect(() => {
    console.log("antes de renderizar");
    const query = {
      nombre: "",
      ingredientes: ["tomate", "queso", "jamon cocido"],
      calorias: "",
    };
    setReceta(query);
  }, []);

  useEffect(() => {
    if (receta.nombre !== "") {
      console.log("despues de obtener receta");
      setNombreReceta(receta.nombre);
    }
  }, [receta]);

  useEffect(() => {
    return () => {
      setReceta(initialState);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    let data = { ...receta };
    data.nombre = nombreReceta;
    setReceta(data);
  };

  return (
    <div className="mi-componente">
      <form onSubmit={onSubmit}>
        <input
          value={nombreReceta}
          onChange={(event) => setNombreReceta(event.target.value)}
        />
        <button type="submit">Cambiar Receta</button>
      </form>

      <RecetaT nombreReceta={receta.nombre} />
      <CaloriasT Calorias={receta.calorias} />
      <Ingredientes ingredientes={receta.ingredientes} />
      <hr />
    </div>
  );
});

export default Recetario;
