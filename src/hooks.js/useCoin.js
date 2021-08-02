import React, { useState } from 'react';

export const useCoin = () => {

    //State del hook
    const [state, setState] = useState('');

    const Select = () => (
        <>
            <label>Moneda</label>
            <input type="text" placeholder="Ej. Dolar" />
        </>
    )

    //Retornar state, interfaz y fn que modifica el state
    return[ state, Select, setState ];
}