import styled from "styled-components";

export const ContentSection=styled.section`
    text-align:center;
    padding-top: 6.5rem;
    max-height: 100vh;
    margin-bottom: 10rem;
`
export const Card=styled.div`
    padding-bottom: 3rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:#FFFFFF;
    `
export const Title = styled.p`    
    font-family: fantasy;
    font-size: 5rem;
    color: #000000;
    text-shadow: 6px 4px 5px rgba(109,121,134,0.61);
    `
export const Text = styled.p`
    font-size:1.3rem;
    color: #4F4F4F;
    line-height: 1.5;
    font:fantasy;
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
`
export const DefaultTitle = styled.div`
    margin-bottom: 1rem;
    font-family: "Ubuntu";
    font-size: 3rem;
    font-weight: bold;
    @media (max-width: 1080px) {
    font-size: 1rem;
}
`;

export const StandardText = styled.div`
    font-size: 1.5rem;
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