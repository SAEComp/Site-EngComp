import styled from "styled-components";
import dark from "../../themes/dark"

export const Container = styled.div`
`;

export const Wrapper = styled.div`
    //height:100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-behavior: smooth;
`;

export const HeaderNotas = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    position:relative;
    scroll-snap-align: center;
    margin: 0;
    height: 100vh;
    width: 100vw;
`;

export const HeaderGradient = styled.div`
    background-image: linear-gradient(to right,rgb(0, 34, 40) 20%, rgba(0, 34, 40, 0.521));
    width: 100%;
    height: 100%;
`;

export const HeaderNotasTitle = styled.div`
    font-family: "Ubuntu";
    font-size: 5rem;
    color: white;
    display: flex;
    padding-top: 40vh;
    margin-bottom: 2rem;
`;

