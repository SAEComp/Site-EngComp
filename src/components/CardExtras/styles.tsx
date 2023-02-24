import styled from 'styled-components';

export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
export const DivText = styled.div`
    margin-left: 3rem;
    flex-direction: column; 
    align-items: center;
`
export const Text = styled.p`
    margin-top: 0;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.5;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
    @media (max-width: 768px){
        font-size: 1.1rem;
    }
    `
export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 400;
`
export const ImgExtra = styled.img`
   
    margin: 0 auto 30px;
    padding-right: 10px;
    max-width: 20vw;
`
