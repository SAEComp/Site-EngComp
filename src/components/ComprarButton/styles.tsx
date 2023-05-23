import styled from "styled-components";

export const ComprarButton = styled.button`
    font-family: "Ubuntu";
    font-weight: bold;
    color:white;

    cursor:pointer;
    transition: box-shadow 0.5s;

    &:hover{
        box-shadow:inset 10rem 0 0 10rem black;
        color:#00c774;
    }
`;