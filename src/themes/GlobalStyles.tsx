import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        outline: none;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-family: 'Ubuntu', sans-serif;
    }

    ::-webkit-scrollbar {
        display:none;
    }

`;

export default GlobalStyles;