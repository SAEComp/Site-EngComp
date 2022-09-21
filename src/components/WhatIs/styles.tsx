import styled from "styled-components";
import dark from "../../themes/dark";

export const WhatIsDiv = styled.div`
    
    background:${dark.text};
    color:${dark.background};
    padding: 4vh 3vw;
    
    h1{
        margin-bottom:2.5rem;
        color:#003CC5;

        font-size:2rem;
    }
    @media(max-width: 1080px){
        min-height: 100vh;
        padding-left: 10vw;
    }
`;

export const Grid = styled.div`
    max-height: 100vh;
    display:grid;
    grid-template-columns:1fr  1fr;
    grid-gap:1.25rem;
    position: relative;
    @media(max-width: 1080px){
            
            grid-template-columns:none;
            grid-gap:none;
            display: flex;
            flex-direction: column;
            align-items: center;
            .svg-logo{
                height: 100%;
            }
     
        }

    >div{

        >p{
            font-family: 'Oxygen',sans-serif;
            font-size:1.3rem;
            text-align: justify;
            margin-bottom:1.25rem;
            @media(max-width: 1080px){
                font-size: 1.1rem;
            }
        }

        >div {
            display:flex;
            justify-content:center;
            align-items: center;

            >button{
            width:17.5rem;
            height:3rem;

            font-size:1rem;
        }
        
        
    }

    .svg-logo{
        max-width:30vw;
    }
}
`;