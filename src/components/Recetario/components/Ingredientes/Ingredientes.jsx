import React, { memo } from 'react';

const Ingredientes = memo(({ingredientes}) => {
    return (
        <ol>
      {ingredientes.map((ingrediente, i) => (
        <li key={i}>{ingrediente}</li>
      ))}
    </ol>
    );
});

export default Ingredientes;