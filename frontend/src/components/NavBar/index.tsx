import React from "react";
import OrangePinkButton from "../Button";
import { LoginDiv, LogoDiv, NavBarContainer, NavItem, NavList} from "./styles";

const NavBar:React.FC = () =>{
        return(
           <NavBarContainer>
                   <LogoDiv><a href="#">ENG<span>COMP</span></a></LogoDiv>
                   <NavList>
                        <NavItem><a href="#">O Curso</a></NavItem>
                        <NavItem><a href="#">Extracurriculares</a></NavItem>
                        <NavItem><a href="#">Carreira</a></NavItem>
                   </NavList>
                   <LoginDiv>É aluno? <OrangePinkButton text="Login"/></LoginDiv>
           </NavBarContainer>
        );
        
}

export default NavBar;