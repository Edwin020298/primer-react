import React, { memo } from 'react';

const NombreT = memo(() => {
    return <h3>{`Nombre: ${NombreT.ingredientes}`}</h3>
});

export default NombreT;