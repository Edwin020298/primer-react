import React, { memo } from 'react';

const Formulario = memo(({receta,setReceta,nombreReceta,setNombreReceta}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        let data = { ...receta };
        data.nombre = nombreReceta;
        setReceta(data);
      };

    return (
        <form onSubmit={onSubmit}>
        <input
          value={nombreReceta}
          onChange={(event) => setNombreReceta(event.target.value)}
        />
        <button type="submit">Cambiar Receta</button>
      </form>
    );
});

export default Formulario;