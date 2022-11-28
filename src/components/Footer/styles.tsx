import styled from "styled-components";
import dark from "../../themes/dark";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${dark.background};
    color: ${dark.text};
    scroll-snap-align: center;
    padding-top:2rem;
    padding-bottom:2rem;
    width: 100vw;
    h1{
        font-size:1rem;
        font-weight:bold;
    }

    h2{
        font-size:0.8rem;
        font-weight:normal; 
    }

    div{
        margin-top: 0.6rem;
        display:flex;

        a{
            text-decoration:none;
            color:white;

            display:flex;
            justify-content: center;
            align-items: center;

            /* border:1px solid white; */

            & + a{
                margin-left:1.25rem;
            }

            .svg{
                height:1.5rem;
                width:1.5rem;
                
                transition:color 0.3s;

                &:hover{
                    color:#00EFFF;
                }
            }
        }
    }

`;