import styled from 'styled-components';

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

export const TextDiv = styled.div`
    margin-left: 10rem;
    max-width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media(max-width: 1080px){
      margin: 0 auto;
      max-width: 80%;
      justify-content: center;
    }
`;

export const HeaderTextTitle = styled.div`
    max-width: 100vh;
    margin-bottom: 1rem;
    font-size: 3rem;
    color: #1A6930;
    @media (max-width: 1080px) {
      font-size: 1rem;
    }
`;

export const HeaderText = styled.div`
    max-width: 80vw;
    color: #545454;
    font-size: 1.5rem;
    font-family: "Oxygen";
    @media (max-width: 1080px) {
      font-size: 1rem;
    }  
`;

export const HeaderImg = styled.div`
  max-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    margin-top: 25vh;
    width: 50vw;
    height: 22vh;
  }
`;