import styled from "styled-components";

export const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
`
export const ContentSection2 = styled.section`
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    background-color: #f8f9fa;
`
export const ContentSection3 = styled.section`
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    background-color: #1D809F;
    color: #fff;
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
export const TitleCont = styled.div`
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: inline-block
`
export const SubtitleCont = styled.h2`
    font-weight: 500;
    margin-bottom: .5rem;    
`
export const TextCont = styled.div`
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 3rem;
    margin-top: 0;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`
export const NumberCont = styled.div`
    color: #00a8b1;
    font-weight: 900;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: inline;
`
export const LinkSocial = styled.a`
    color: #f7b120;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.25rem;
    &:hover{
    color: #dc9c18;
    }
`
export const TextSocial = styled.b`
    font-size: 1.25rem;
`
export const LineThrough = styled.div`
    text-decoration: line-through;
    display: inline;
`
export const TextFaded = styled.p`
    color: rgba(255, 255, 255, 0.7);
`
export const DivApp = styled.div`
    text-align: center;
    min-height: 1px;
    flex: 0 0 50%;
    width: 50%;
`
export const UlApp = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
`
export const ImgApp = styled.img`
    margin-bottom: .5rem;
    margin: auto;
    display : table;
    width: 100px;
`
