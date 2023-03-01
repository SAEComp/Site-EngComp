import styled from 'styled-components';

export const HeaderTopic = styled.div`
    margin-top: 16rem;
    width : 100%;
    height: 85vh;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: scroll;
    position: relative;
    scroll-snap-align: center;
`;

export const TextDiv = styled.div`
    margin-top: 10rem;
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
    font-family: "Ubuntu";
    font-weight: bold;
    color: #238d41;
    margin-top: 28rem;
    max-width: 100vh;
    margin-bottom: 1rem;
    font-size: 3rem;
    @media (max-width: 1080px) {
      font-size: 1rem;
    }
`;

