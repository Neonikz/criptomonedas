import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import { Form } from './components/Form';
import axios from 'axios';
import { Result } from './components/Result';
import { Spinner } from './components/Spinner';

const Container = styled.div`
    max-width:900px;
    margin: 0 auto;
    @media (min-width:992px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Image = styled.img`
    max-width:100%;
    margin-top: 5rem;
`;

const Heading = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size:50px;
    margin-bottom:50px;
    margin-top:80px;

    &::after{
        content:'';
        width:100px;
        height:6px;
        background-color: #66a2fe;
        display: block;
    }
`;

export const BitcoinsApp = () => {

    const [coin, setCoin] = useState('');
    const [cripto, setCripto] = useState('');
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        const calculateCripto = async() =>{
            
            //Evitamos la primera ejecucion
            if(!coin) return;

            //Consultar a la API
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${coin}`;
            const result = await axios.get(url);

            //Mostrar spinner
            setLoading(true);
            setTimeout(() => {
                //Ocultar spinner
                setLoading(false);
                //Guardar cotizacion
                setResult( result.data.DISPLAY[cripto][coin]);
            }, 3000);
        }
        calculateCripto();
    }, [coin, cripto]);

    //Mostrar spinner o resultado
    const component = loading ? <Spinner /> : <Result result={ result } />

    return (
        <Container>
            <div>
                <Image 
                    src={ image }
                    alt="imagen cripto"
                />
            </div>
            <div>
                <Heading>
                    Cotiza criptomonedas al instante        
                </Heading>

                <Form
                    setCoin={ setCoin }
                    setCripto={ setCripto }
                />

                { component }
            </div>
        </Container>
    )
}
