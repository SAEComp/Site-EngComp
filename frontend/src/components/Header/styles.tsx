import styled from 'styled-components';

export const Container = styled.div`

    display:flex;
    justify-content: space-around;
    align-items: center;

    padding:30px;

    background:#536FC4;
    color:#fff;

    span{
        display:block;
        margin-right:60px;

        font-size:32pt;
        font-weight: lighter;
    }

`;

export const NavBar = styled.ul`

    display:flex;
    justify-content: flex-start;
    align-items: center;

    list-style:none;
`;

export const NavBarItem = styled.li`

    cursor:pointer;

    font-size: 1.2rem;
    font-weight: lighter;
    text-transform:uppercase;

    padding:10px 8px;

    transition: color 0.2s;

    & + li {
        margin-left:90px;
    }

    &:hover{
        color:#333;
    }
`;