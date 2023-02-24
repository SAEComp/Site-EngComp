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
        max-width: 20vw;
        height: 20vw;

    }
`
export const DivText = styled.div`
    margin-top:1rem;
`
export const Text = styled.p`
    color: #828282;
    font-size: 1.3rem;
    font-weight: 700;
    font-family: Oxygen;
    text-align: center;
    @media(max-width: 1080px){
        font-size: 70%;
    }
`
