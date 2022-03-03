import React, { memo, useState, useEffect } from "react";
import "./Recetario.css";
import RecetaT from "./components/RecetaT/RecetaT";
import CaloriasT from "./components/CaloriasT/CaloriasT";
import Ingredientes from "./components/Ingredientes/Ingredientes";
import Formulario from "./components/Formulario/Formulario";
import Input from '../Input/Input'
const initialState = {
  nombre: "",
  ingredientes: [""],
  calorias: "",
  receta: "",
};
const Recetario = memo(() => {
  const [receta, setReceta] = useState(initialState);
  const [nombreReceta, setNombreReceta] = useState(receta.receta);

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
      setNombreReceta(receta.nombre);
    }
  }, [receta]);

  useEffect(() => {
    return () => {
      setReceta(initialState);
    };
  }, []);

  return (
    <div className="mi-componente">
      <Formulario
        receta={receta}
        setReceta={setReceta}
        nombreReceta={nombreReceta}
        setNombreReceta={setNombreReceta}
      />
        <Input
          id="nombre_receta"
          name="nombre_receta"
          type="text"
        />
        
      <RecetaT nombreReceta={receta.nombre} />
      <CaloriasT Calorias={receta.calorias} />
      <Ingredientes ingredientes={receta.ingredientes} />
      <hr />
    </div>
  );
});

export default Recetario;
