import React, { memo } from "react";
import Input from "../../../Input/Input";
const Formulario = memo(
  ({ receta, setReceta, nombreReceta, setNombreReceta }) => {
    const onSubmit = (e) => {
      e.preventDefault();
      let data = { ...receta };
      data.nombre = nombreReceta;
      setReceta(data);
    };

    const settearNombreReceta = (event) => {
      setNombreReceta(event.target.value);
    };

    return (
      <form onSubmit={onSubmit}>
        <Input
          id="nombre_receta"
          name="nombre_receta"
          type="text"
          value={nombreReceta}
          onChange={settearNombreReceta}
        />
        <button type="submit">Cambiar Receta</button>
      </form>
    );
  }
);

export default Formulario;
