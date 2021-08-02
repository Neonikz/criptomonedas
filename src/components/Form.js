import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useCoin } from '../hooks.js/useCoin';
import { useBitcoin } from '../hooks.js/useBitcoin';
import axios from 'axios';
import { Error } from './Error';

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

export const Form = ({ setCoin, setCripto }) => {

    //State del listado de criptomonedas
    const [criptoList, setCriptoList] = useState([]);
    const [error, setError] = useState(false);

    const coins = [
        {code: 'USD', name: 'Dolar de Estados Unidos'},
        {code: 'ARN', name: 'Peso Argentino'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'Libra Esterlina'}
    ];

    //Utilizar useCoin
    const [ coin, SelectCoin ] = useCoin('Elige tu moneda','', coins);

    //Utilizar criptomoneda
    const [ cripto, SelectCripto ] = useBitcoin('Elige tu Criptomoneda','',criptoList);

    //Ejecutar llamado a la API
    useEffect(() => {
        const consultAPI = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            setCriptoList(result.data.Data);
        }

        consultAPI();
    }, []);

    //Submit del form
    const handleSubmit = e => {
        e.preventDefault();

        //Validar
        if( !coin || !cripto ){
            setError(true);
            return;
        }
        setError(false);

        //Pasar los datos al componente principal
        setCoin(coin);
        setCripto(cripto);

    }

    return (
        <form
            onSubmit={ handleSubmit }
        >
            { error && <Error message="Todos los campos son obligatorios"/> }
            <SelectCoin />

            <SelectCripto />

            <Button 
                type="submit"
                value="Calcular"
            />
        </form>
    )
}
