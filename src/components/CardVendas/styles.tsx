import styled from 'styled-components';

export const VendasTopic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width : 20vw;
    height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    scroll-snap-align: center;
    
`;
export const DivBlock = styled.div`
    display: inline-block;
    margin: 1em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
`;

export const VendasImg = styled.div`
    margin-top: .8em;
    border-radius: 10px;
    width : 90%;
    height: 42vh;
    background-size: 100%;
    background-repeat: no-repeat;
    background-attachment: scroll;
    position: relative;
    scroll-snap-align: center;
`;

export const ComprarButtonDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-start;
    margin-top: 0rem;
    @media(max-width: 1080px){
            display: flex;
        }
    button{
        width:10rem;
        height:3rem;
        font-size:1.55rem;
        padding: 8px 10px;
        color:white;
        background:linear-gradient(45deg,#04b855,#05e090);
        border:none;
        border-radius:20px;
    }
`;