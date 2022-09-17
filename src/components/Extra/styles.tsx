import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding:100px 160px;
    scroll-snap-align: center;
    background-image: linear-gradient(to right, #03194C, #003CC5);
`;


export const TitleTex = styled.div`
    font-family: "Ubuntu";
    font-size: 36pt;
    color: #EE0979;
`;

export const NormalText = styled.div`
    font-family: "Oxygen";  
    margin-top:40px;
    font-size: 13pt;
    color: white;
`;

export const TextDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ExtrasLogos = styled.div`
    margin-top:60px;
    width:100%;

    display:flex;
    justify-content:center;
`;

export const LogoDiv = styled.a`
    display:flex;
    justify-content: center;
    align-items: center;

    padding:45px;
    width:450px !important;
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
    margin:80px auto;
    padding:20px 40px;

    border:1px solid #EE0979;
    border-radius:15px;

    font-size:4rem;
    font-weight: normal;
    color:#EE0979;

    background-color: transparent;
    cursor:pointer;

    transition:box-shadow 0.8s;

    &:hover{
        color: white;
        box-shadow: inset 700px 0px 300px #EE0979;
    }
    
`;

