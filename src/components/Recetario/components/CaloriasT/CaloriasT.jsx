import React, { memo } from 'react';

const CaloriasT = memo(({Calorias}) => {
    return <h2>{`Calorias: ${Calorias}`}</h2>
});

export default CaloriasT;