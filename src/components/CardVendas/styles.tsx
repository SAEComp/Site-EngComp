import styled from 'styled-components';

export const VendasTopic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width : 20vw;
    height: 24vw;
    position: relative;
    scroll-snap-align: center;
    a{text-decoration: none;}
    @media(max-width: 1080px){
        height: 25vw;
    }
    
`;
export const DivBlock = styled.div`
    display: inline-block;
    margin: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
`;

export const VendasImg = styled.div`
    margin-top: 1.3vw;
    border-radius: 10px;
    position: relative;
    scroll-snap-align: center;
    @media (max-width: 1920px){
        img{
        width : 15vw;
        height: 18vw;
        }
    }
    
`;

export const ComprarButtonDiv = styled.div`
    position: relative;
    display:flex;
    align-items:center;
    justify-content: flex-start;
    margin-top: .5vw;
    button{    
        width: 10vw;
        height: 2.5vw;
        font-size: 1.55vw;
        padding: .3vw .3vw;
        color:white;
        background:linear-gradient(45deg,#04b855,#05e090);
        border:none;
        border-radius: 1vw;
    }
`;