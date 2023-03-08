import styled from "styled-components";

export const CardDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
    height: 10vh;
    padding: 1em;
    margin: 10rem;
    margin-top: 1em;
    background: linear-gradient(91.66deg, rgba(0, 4, 40, 0.99) -27.06%, #060E30 44.62%, rgb(0, 49, 185) 164.11%);
    border-radius: 1em;
    cursor: pointer;
    transition:box-shadow 0.5s;

    &:hover{
        box-shadow:rgb(238, 9, 121, 0.5) 0px 22px 70px 4px, inset 900px 0px 300px hsl(223.63636363636363, 57.89473684210527%, 18.627450980392158%);
    }
`;
//Media querie -> text display none
//Justify content center

export const NormalText = styled.div`
    color: white;
    font-family: 'Oxygen';
    font-size: 1.5em;
    text-decoration: none;
    padding-right: 2em;
`;