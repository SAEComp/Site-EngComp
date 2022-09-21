import styled from "styled-components";


export const Container = styled.div`
    max-width: 100vw;
    height: 100vh;
    padding:6.25rem 10rem;
    scroll-snap-align: center;
    background-image: linear-gradient(to right, #03194C, #003CC5);
`;


export const TitleTex = styled.div`
    font-family: "Ubuntu";
    font-size: 2.25rem;
    color: #EE0979;
`;

export const NormalText = styled.div`
    font-family: "Oxygen";  
    margin-top:40px;
    font-size: 13pt;
    color: white;
`;

export const TextDiv = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ExtrasLogos = styled.div`
    margin-top:4.5rem;
    max-width:100%;

    display:flex;
    justify-content:center;
`;

export const LogoDiv = styled.a`
    display:flex;
    justify-content: center;
    align-items: center;

    padding:1rem;
    width: 25vw;
    text-align:center;

    border-radius:20px;
    box-shadow:
        6px 6px 20px hsla(0, 0%, 0%, 0.15),
        -6px -6px 16px rgba(184, 9, 243, 0.05);

    cursor:pointer;
    transition:box-shadow 0.3s, transform 0.3s;

    &.centered{
        margin:0 40px;
    }

    &:hover{
        transform:scale(1.04);

        box-shadow: rgb(238, 9, 121, 0.5) 0px 22px 70px 4px;
        
        
    }

    &:active{
        transform:scale(0.99);

        box-shadow:
        inset 6px 6px 20px rgba(0,0,0,0.15),
        inset -6px -6px 16px rgba(255,255,255,0.05);

    }
`;

export const Button = styled.button`
    max-width: 30vw;
    margin:5rem auto;
    padding:1.25rem 2.5rem;

    border:1px solid #EE0979;
    border-radius:1rem;

    font-size: 1.5rem;
    font-weight: normal;
    color:#EE0979;

    background-color: transparent;
    cursor:pointer;

    transition:box-shadow 0.8s;

    &:hover{
        color: white;
        box-shadow: inset 44rem 0px 20rem #EE0979;
    }
    
`;

