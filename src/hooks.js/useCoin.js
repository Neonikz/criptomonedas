import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family:'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size:2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Selection = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

export const useCoin = (label, initialState, options) => {

    //State del hook
    const [state, setState] = useState(initialState);

    const Select = () => (
        <>
            <Label>{ label }</Label>
            <Selection
                onChange={ e => setState(e.target.value)}
                value={ state }
            >
                <option value="">- Seleccione -</option>
                {options.map( option => (
                    <option key={option.code} value={option.code}>{option.name}</option> 
                ))}
            </Selection>
        </>
    )

    //Retornar state, interfaz y fn que modifica el state
    return[ state, Select, setState ];
}