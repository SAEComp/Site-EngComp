import styled from "styled-components";
import background from "../../assets/img/enembackground.jpg"

export const Container = styled.div`
    background-image: url(${background}); 
    background-size: cover; 
    background-position: center; 
    background-attachment: fixed;
    padding-top: 10vh;
    padding-bottom: 10vw;
`;

export const EnemNotasDiv = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const TableDiv = styled.div`
    font-size: 1.4em
`;


export const Grid = styled.div`
    max-height: 100vh;
    display:grid;
    grid-template-columns:1fr  1fr;
    grid-gap:1.25rem;
    position: relative;
    @media(max-width: 1080px){
            
            grid-template-columns:none;
            grid-gap:none;
            display: flex;
            flex-direction: column;
            align-items: center;
            .svg-logo{
                height: 100%;
            }
     
        }

    >div{

        >div {
            display:flex;
            justify-content:center;
            align-items: center;

            >button{
            width:17.5rem;
            height:3rem;

            font-size:1rem;
        }
        
        
    }

    .svg-logo{
        max-width:30vw;
    }
}
`;