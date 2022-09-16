import styled from 'styled-components';
import dark from '../../themes/dark';

export const NavBarContainer = styled.div`
    position:fixed;
    top:0;
    z-index:1;
    width:100%;
    height:80px;

    z-index:1;

    padding: 0 160px;
    background:rgba(0,0,0,0.2);

    color:${dark.text};

    display:flex;
    justify-content: center;

    >div{
        width:100%;
        height:80px;

        font-weight:lighter;
        /* border:1px solid red; */
    }
`;

export const NavList = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
`;

export const NavItem = styled.div`
    font-weight: lighter;
    height:80px;

    display:flex;
    align-items: center;
    a{
        text-decoration: none;
        color:${dark.text};

        transition:text-shadow 0.3s;

        &:hover{
            text-shadow:0px 0px 25px white;
        }
    }
`;

export const LogoDiv = styled.div`
    display:flex;
    align-items:center;

    font-size:38px;

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

    button{

        width:100px;
        height:40px;
        margin-left:20px;

        /* padding:5px 10px;
        color:white;
        background:linear-gradient(45deg,#EE0979,#FF6A00);
        border:none;
        border-radius:15px; */

        font-size:18px;




    }
`;