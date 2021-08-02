import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

export const Result = ({result}) => {
    if(Object.keys(result).length === 0) return null;

    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{result.PRICE}</span> </Precio>
            <Info>Precio más alto del día: <span>{result.HIGHDAY}</span> </Info>
            <Info>Precio más bajo del día: <span>{result.LOWDAY}</span> </Info>
            <Info>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span> </Info>
            <Info>Última Actualización: <span>{result.LASTUPDATE}</span> </Info>
        </ResultadoDiv>
     );
}