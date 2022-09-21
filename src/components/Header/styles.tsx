import styled, { keyframes } from 'styled-components';
import img from '../../assets/img/background1.jpg';
import img2 from '../../assets/img/background1.jpg';



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

export const HeaderTopic = styled.div`
    width : 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    position:relative;
    scroll-snap-align: center;
`;
export const HeaderTextTitle = styled.div`
    
    max-width: 70vh;
    margin-bottom: 1rem;
    font-size: 4rem;
    color: #00EFFF;
    @media (max-width: 1080px) {
      font-size: 2rem;
    }

   
`;
export const HeaderText = styled.div`
    max-width: 60vw;
    color: white;
    font-size: 1.5rem;
    font-family: "Oxygen";
    @media (max-width: 1080px) {
      font-size: 1.1rem;
    }
   
`;

export const HeaderGradient = styled.div`
    background-image: linear-gradient(to right,rgb(0,4,40) 20%, transparent);
    width: 100%;
    height: 100%;
`;

export const TextDiv = styled.div`
    margin-left: 10rem;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media(max-width: 1080px){
      margin: 0 auto;
      max-width: 80%;
      justify-content: center;
    }
`;


export const ArrowDiv = styled.div`
    width:100%;

    position:absolute;
    bottom:0;

    display:flex;
    justify-content: center;

    font-size: 7rem;

    .arrow{
        color:white;
        animation:${rotate} 2s infinite;
    }

`;