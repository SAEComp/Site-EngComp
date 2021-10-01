import styled from "styled-components";

export const Button = styled.button`

    background:linear-gradient(45deg,#EE0979,#FF6A00);
    color:white;

    padding:5px 10px;
    
    border:none;
    border-radius:15px;
        
    cursor:pointer;
    transition:box-shadow 0.5s;

    &:hover{
        box-shadow:inset 500px 0px 0px white;
        color:#EE0979;
    }

`;