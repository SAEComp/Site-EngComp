import styled from 'styled-components';

export const ContentSection = styled.section`
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    background-color: #f8f9fa;
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
export const TitleCont = styled.h1`
    font-weight: 700 !important;
    font-size: 3rem;
    margin-bottom: 2rem;
    @media (max-width: 768px){
        font-size: 1.5rem;
    }
`
export const SubtitleCont = styled.h2`
    font-weight: 500;
    margin-bottom: 3rem;
`
export const DivFlex = styled.div`
    display: inline-flex;
    align-items:center;
    justify-content: center;
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
`
export const DivFlex2 = styled.div`
    flex-direction: column;
`
export const TextCont = styled.div`
    font-size: 1.3rem;
    font-weight: 300;
    margin-bottom: 1rem;
    margin-top: 0;
    line-height: 1.5;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
    @media (max-width: 768px){
        font-size: 1.1rem;
    }
`
export const ImgPerry = styled.img`
    max-height: 350px !important;
    max-width: 90% !important;
    margin: 0 0 30px;
    width: auto !important;
`
export const LinkSocial = styled.a`
    color: #f7b120;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.25rem;
    @media (max-width: 768px){
        font-size: .9rem;
    }
    &:hover{
    color: #dc9c18;
    }
`
export const TextSocial = styled.b`
    font-size: 1.25rem;
    @media (max-width: 768px){
        font-size: 1.1rem;
    }
`