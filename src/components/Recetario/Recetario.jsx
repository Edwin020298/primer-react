import React, { memo, useState, useEffect } from "react";
import "./Recetario.css";
import RecetaT from "./components/RecetaT/RecetaT";
import CaloriasT from "./components/CaloriasT/CaloriasT";
import NombreT from "./components/NombreT/NombreT";
import Ingredientes from "./components/Ingredientes/Ingredientes";
import Formulario from "./components/Formulario/Formulario";

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
      <RecetaT nombreReceta={receta.nombre} />
      <CaloriasT Calorias={receta.calorias} />
      <Ingredientes ingredientes={receta.ingredientes} />
      <hr />
    </div>
  );
});

export default Recetario;
