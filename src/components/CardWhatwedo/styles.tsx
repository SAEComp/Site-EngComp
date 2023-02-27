import styled from 'styled-components';

export const CardDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`  
export const WhatImg = styled.img`
    width: 240px;
    height: 240px;
    @media(max-width:1080px){
        max-width: 15vw;
        height: 15vw;

    }
`
export const DivText = styled.div`
    margin-top:1rem;
`
export const StandardText = styled.div`
    max-width: 80vw;
    color: #545454;
    font-size: 1.5rem;
    font-family: "Oxygen";
    @media (max-width: 1080px) {
      font-size: 1rem;
    }  
`;
