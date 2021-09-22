import React from "react";
import { Container, NavBar, NavBarItem } from './styles';

const Header:React.FC = () =>{
        return(
            <Container>
                <span className="Logo">EngComp USP</span>
                <NavBar>
                    <NavBarItem>Página 1</NavBarItem>
                    <NavBarItem>Página 2</NavBarItem>
                    <NavBarItem>Página 3</NavBarItem>
                    <NavBarItem>Página 4</NavBarItem>
                </NavBar>
            </Container>
        );
}

export default Header;