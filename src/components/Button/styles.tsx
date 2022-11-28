import styled from "styled-components";

export const Button = styled.button`

    background:linear-gradient(45deg,#EE0979,#FF6A00);
    color:white;

    padding:0.3rem 0.625rem;
    
    border:none;
    border-radius:1rem;
        
    cursor:pointer;
    transition:box-shadow 0.5s;

    &:hover{
        box-shadow:inset 22.5rem 0 0 white;
        color:#EE0979;
    }

`;