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

export const Centered = styled.div`
    width: 100%;
    

`;
export const HeaderBixo = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(0,4,40);

    img{
        width: 400px;
    }
    @media (max-width: 768px) {
        img{
            width: 60vw;
        }
    };
        
    
`;