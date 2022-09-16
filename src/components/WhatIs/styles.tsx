import styled from "styled-components";
import dark from "../../themes/dark";

export const WhatIsDiv = styled.div`
    scroll-snap-align: center;
    height:100vh;
    background:${dark.text};
    color:${dark.background};

    padding:100px 160px;
    
    h1{
        margin-bottom:40px;
        color:#003CC5;

        font-size:36pt;
    }
`;

export const Grid = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:20px;

    >div{

        >p{
            font-family: 'Oxygen',sans-serif;
            font-size:13pt;
            text-align: justify;

            margin-bottom:20px;
        }

        >div {
            display:flex;
            justify-content:center;
            align-items: center;

            >button{
            width:300px;
            height:50px;

            font-size:16pt;
            margin:60px;
        }
        
    }

    .svg-logo{
        width:100%;
    }
}
`;