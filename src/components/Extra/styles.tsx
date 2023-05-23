import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    max-width: 100vw;
    height: 105vh;
    padding-left: 10rem;
    //scroll-snap-align: center;
    
    background-image: linear-gradient(to right, #03194C, #003CC5);
    @media(max-width: 1080px){
        padding-left: 10vw;
    }
`;


export const TitleTex = styled.div`
    
    margin-top: 10vw;
    font-family: "Ubuntu";
    font-size: 2.25rem;
    color: #EE0979;
    @media(max-width: 1080px){
        font-size: 2rem;
    }
`;

export const TextDiv = styled.div`
    
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ExtrasLogos = styled.div`
    margin-top:4.5rem;
    overflow-x: scroll;
    display:flex;
    @media(max-width: 1080px){
        justify-content: flex-start;
    }

`;

export const LogoDiv = styled.a`
    display:flex;
    min-width: 20vw;
    padding:3vh 5vh;
    margin: 3vw;

    img, .Ada{
        margin: 0 auto;
        height: 6vh;
    }

    text-align:center;

    @media(max-width:1080px){
        padding:2rem 6rem;
        margin-left: 1rem;
        border: 1px solid red;
        justify-content: center;
        img, .Ada{
        height: 4vh;
    }
    }

    border-radius:20px;
    box-shadow:
        6px 6px 20px hsla(0, 0%, 0%, 0.15),
        -6px -6px 16px rgba(184, 9, 243, 0.05);

    cursor:pointer;
    transition:box-shadow 0.3s, transform 0.3s;


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
export const Centered = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const Button = styled.button`
    max-width: 30vw;
    padding:1rem 2.5rem;
    @media(max-width: 1080px){
        max-width: 80vw;
        align-self: center;
        font-size: 2rem;
    }
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
        box-shadow: inset 10rem 1rem 10rem 1rem #EE0979;
    }
    
`;


const rotate = keyframes`
0%{
    transform:translateY(0px);
}

60%{
  transform:translateY(0px);
}

70%{
  transform:translateY(10px);
}
80%{
  transform:translateY(0px);
}
90%{
  transform:translateY(10px);
}
100%{
  transform:translateY(0px);
}
`;

export const ArrowDiv = styled.div`
    margin: 0 auto;
    font-size: 7rem;
    display: flex;
    align-items: center;
    .arrow{
        color:white;
        animation:${rotate} 2s infinite;
        transition: color 0.3s ease-in;
        &:hover{
          color: rgb(238, 9, 121, 0.8);
        }
    }


`;
