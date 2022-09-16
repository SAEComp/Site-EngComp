import styled, { keyframes } from 'styled-components';
import img from '../../assets/img/background1.jpg';

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
    background-image: url(${img});
    background-position: fixed;
    background-attachment: fixed;
    position:relative;
    scroll-snap-align: center;
`;
export const HeaderTextTitle = styled.div`
    
    width: 70%;
    margin-bottom: 20px;
    font-size: 60px;
    color: #00EFFF;

   
`;
export const HeaderText = styled.div`
    color: white;
    font-size: 25px;
    font-family: "Oxygen";
   
`;

export const HeaderGradient = styled.div`
    background-image: linear-gradient(to right,rgb(0,4,40) 20%, transparent);
    width: 100%;
    height: 100%;
`;

export const TextDiv = styled.div`
    margin-left: 160px;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
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