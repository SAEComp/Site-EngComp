import React from "react";
import OrangePinkButton from "../Button";
import { LoginDiv, LogoDiv, NavBarContainer, NavItem, NavList} from "./styles";
import { Link } from "react-router-dom";

const NavBar:React.FC = () =>{
        return(
           <NavBarContainer>
                   <LogoDiv><a href="#">ENG<span>COMP</span></a></LogoDiv>
                   <NavList>
                        <NavItem><a href="#">O Curso</a></NavItem>
                        <NavItem><a href="/Extracurriculares">Extracurriculares</a></NavItem>
                        <NavItem><a href="/Enfases">Enfases</a></NavItem>
                        <NavItem><a href="/Notas-Corte">Notas</a></NavItem>
                        <NavItem> <Link to="/Manual-Bixo/index.html">Components</Link></NavItem>
                   </NavList>
                   <LoginDiv>É aluno? <OrangePinkButton text="Login"/></LoginDiv>
           </NavBarContainer>
        );
        
}

export default NavBar;
