import styled from "styled-components";

export const ContentSection=styled.section`
    text-align:center;
    padding-top: 6.5rem;
    max-height: 100vh;
    margin-bottom: 10rem;
`
export const Card=styled.div`
    padding-bottom: 5rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:#FFFFFF;
    @media(max-width: 1080px){
        
        >img{
            max-width: 70%;
        }
    }
    `
export const DevTitle = styled.p`    
    font-family: fantasy;
    font-size: 3rem;
    color: #000000;
    text-shadow: 6px 4px 5px rgba(109,121,134,0.61);
    @media(max-width: 1080px){
            font-size: 2rem;
    
    }
    `
export const DevText = styled.p`
    font-size:1.2rem;
    color: #4F4F4F;
    line-height: 1.5;
    font:fantasy;
    @media(max-width: 1080px){
            font-size: 1rem;
    
    }
 
`
export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SocialImg = styled.img`
    margin: auto;
    width: 60px;
    padding-top: 1rem;
    padding-left: 1rem;
    @media(max-width: 1080px){
        
        >img{
            max-width: 70%;
        }
    }
`
export const DefaultTitle = styled.div`
    margin-bottom: 1rem;
    font-family: "Ubuntu";
    font-size: 2rem;
    font-weight: bold;
    @media (max-width: 1080px) {
    font-size: 1rem;
}
`;

export const StandardText = styled.div`
    font-size: 1.2rem;
    font-family: "Oxygen";
    @media (max-width: 1080px) {
      font-size: 1rem;
    }  
`
export const DefaultSubtitle = styled.div`
    margin-bottom: 0.5rem;
    font-family: "Ubuntu";
    font-weight: 400;
    font-size: 2rem;
    @media (max-width: 1080px) {
        font-size: 1rem;
      }  
`

export const Defaultmargin = styled.div`
    margin-left: 10rem;
    margin-right: 10rem;
    @media (max-width: 1080px){
        margin: 0 auto;
        max-width: 80%;

    }
`
