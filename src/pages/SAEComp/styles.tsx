import styled from "styled-components";
import dark from "../../themes/dark"

export const Container = styled.div`
`;

export const Wrapper = styled.div`
`;

export const ProjetosEmAcao = styled.div`
    max-width: 100%;
    height: 100%;
    @media(max-width: 1080px){
      margin: 0 auto;
      max-width: 80%;
    }
`;

export const Centered = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0 2rem 0;


`;

export const DualGrid = styled.div`
    margin: 0 auto;
    width: 80%;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    @media(max-width: 1080px){
        flex-direction: column;
    }


`;

export const Button = styled.button`
    max-width: 30vw;
    padding:1rem 2.5rem;
    @media(max-width: 1080px){
        max-width: 80vw;
        align-self: center;
        font-size: 2rem;
    }
    border:1px solid #238d41;
    border-radius:1rem;

    font-size: 1.5rem;
    font-weight: normal;
    color:#238d41;

    background-color: transparent;
    cursor:pointer;

    transition:box-shadow 0.8s;

    &:hover{
        color: white;
        box-shadow: inset 10rem 1rem 10rem 1rem #238d41;
    }
    
`;