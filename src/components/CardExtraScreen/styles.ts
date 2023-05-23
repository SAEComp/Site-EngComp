import styled from 'styled-components';

export const SubtitleCont = styled.h1`
    font-weight: 700 !important;
    font-size: 3rem;
    margin-bottom: 4rem;
    @media (max-width: 768px){
        font-size: 2rem;
    }
`
export const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
`
export const Container = styled.div`
    width: 60%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    padding-bottom:3rem;

    .textCenter{
        text-align: center;
    }
`

