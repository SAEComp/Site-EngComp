import styled from "styled-components";
import dark from "../../themes/dark";

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
`
export const TitleCont = styled.div`
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: inline;

`
export const NumberCont = styled.div`
    color: #00a8b1;
    font-weight: 900;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: inline;
`
export const TextCont = styled.div`
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 3rem;
    margin-top: 0;
`
export const LineThrough = styled.div`
    text-decoration: line-through;
    display: inline;
`
export const SocialDiv = styled.a`
    
        color: #f7b120;
        font-weight: 600;
        text-decoration: none;
        font-size: 1.25rem;
        &:hover{
            color: #dc9c18;
        }
    

`