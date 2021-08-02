import React from 'react';
import styled from '@emotion/styled';
import { useCoin } from '../hooks.js/useCoin';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size:20px;
    padding:10px;
    background-color: #66a2fe;
    border:none;
    width:100%;
    border-radius:10px;
    color:#fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor:pointer
    }
`;

export const Form = () => {

    //Utilizar useCoin

    const [ coin, SelectCoin, setCoin ] = useCoin();

    return (
        <form>

            <SelectCoin />

            <Button 
                type="submit"
                value="Calcular"
            />
        </form>
    )
}
