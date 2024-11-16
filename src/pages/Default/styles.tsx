import styled from "styled-components";

export const NavBarContainer = styled.div`
    height: 100px;
    width: 100vw;
    background-color: #03B04B;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding: 0 5%;
    z-index: 2;
`;

export const NavButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1100px) {
        display: none; 
    }
`;

export const Logo = styled.img`
    height: 40%;
    cursor: pointer;
    margin-right: 20px;
`;

export const HamburgerButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 2;

    @media (max-width: 1100px) {
        display: block;
    }
`;

export const SideMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: auto;
    width: 250px;
    background-color: #03B04B;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 30px;
    border-radius: 10px;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.4);
`;

export const SideMenuButton = styled.button`
    position: relative;
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
    cursor: pointer;
    padding-bottom: 0.4rem;
    
    &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 0;
        bottom: 0;
        left: 0;
        background-color: white;
        transition: all 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const NavButton = styled.button`
    position: relative;
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    margin-right: 40px;
    cursor: pointer;
    padding-bottom: 0.4rem;
    
    &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 0;
        bottom: 0;
        left: 0;
        background-color: white;
        transition: all 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const LoginButton = styled.button`
    background-color: black;
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
    transition: all 0.5s ease;
    font-size: 20px;

    &:hover {
        background-color: white;
        color: green;
    }
`;

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
