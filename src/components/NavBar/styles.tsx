import styled from 'styled-components';
import dark from '../../themes/dark';

interface Props {
    scrollY: number;
  }
export const NavBarContainer = styled.div<Props>`

    position:fixed;
    top:0;
    z-index:1;
    width:100%;
    height:80px;

    padding: 0 10rem;
    background-color: ${({ scrollY }) => ( (scrollY > document.documentElement.clientHeight) ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.2)")};
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    color:${dark.text};

    display:flex;
    justify-content: center;
    transition: background-color 0.3s ease-in-out;
    >div{
        width:100%;
        height:80px;

        font-weight:lighter;
        /* border:1px solid red; */
    }
`;

export const NavList = styled.div`
@media (max-width: 1080px) {
    display: none;
    justify-content: center;
  }
    display:flex;
    //align-items: center;
    justify-content: space-around;
`;

export const NavItem = styled.div`
    width: 10vw;
    font-weight: lighter;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    a{
        text-decoration: none;
        color:${dark.text};

        transition:text-shadow 0.3s;
        transition: color 0.3s;
        &:hover{
            color: rgb(238, 9, 121);
            text-shadow:0px 0px 25px white;
        }
    }
`;

export const LogoDiv = styled.div`
    display:flex;
    align-items:center;


    font-size:2.5rem;
    cursor:pointer;
    transition:transform 0.2s;

    a{
        color:white;
        text-decoration:none;
        transition:color 0.2s;
    }

    a span{
        font-weight:bold;
    }

    &:hover{
        transform: scale(1.05);
        a{
            color:#00EFFF;
        }
    }
`;

export const LoginDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    font-size: 0.7rem;
    @media(max-width: 1080px){
            display: none;
        }
    button{


        width:6.25rem;
        height:2.5rem;
        margin-left:1rem;



        /* padding:5px 10px;
        color:white;
        background:linear-gradient(45deg,#EE0979,#FF6A00);
        border:none;
        border-radius:15px; */
        font-size:1rem;
       


    }
`;
