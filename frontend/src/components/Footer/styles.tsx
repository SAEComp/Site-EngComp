import styled from "styled-components";
import dark from "../../themes/dark";

export const FooterContainer = styled.div`

    background-color: ${dark.background};
    color: ${dark.text};

    padding:30px 160px;

    h1{
        font-size:16pt;
        font-weight:bold;
    }

    h2{
        font-size:14pt;
        font-weight:normal; 
    }

    div{
        margin-top:15px;
        width:10%;

        display:flex;
        justify-content: flex-start;
        align-items: flex-start;

        a{
            text-decoration:none;
            color:white;

            display:flex;
            justify-content: center;
            align-items: center;

            /* border:1px solid white; */

            & + a{
                margin-left:20px;
            }

            .svg{
                height:24px;
                width:24px;
                
                transition:color 0.3s;

                &:hover{
                    color:#00EFFF;
                }
            }
        }
    }

`;