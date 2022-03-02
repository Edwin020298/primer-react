import React, { memo } from 'react';

const CaloriasT = memo(() => {
    return <h2>{`Calorias: ${receta.calorias}`}</h2>
});

export default CaloriasT;