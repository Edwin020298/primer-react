import React, { memo } from 'react';

const Ingredientes = memo(() => {
    return (
        <ol>
      {receta.Ingredientes.map((ingredientes, i) => (
        <li key={i}>{ingredientes}</li>
      ))}
    </ol>
    );
});

export default Ingredientes;