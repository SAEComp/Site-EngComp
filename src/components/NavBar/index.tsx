import React, {useEffect, useRef, useState} from "react";
import OrangePinkButton from "../Button";
import { LoginDiv, LogoDiv, NavBarContainer, NavItem, NavList} from "./styles";




const NavBar:React.FC = ()=>{
        const [scrollY, setScrollY] = React.useState(0);

        function handleScroll() {
    // Change Header background color.
        setScrollY(window.pageYOffset);
         }

    React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

        return(
                <NavBarContainer scrollY = {scrollY}>
                        <LogoDiv><a href="#">ENG<span>COMP</span></a></LogoDiv>
                        <NavList> 
                             <NavItem><a href="/">Home</a></NavItem>
                             <NavItem><a href="/Extracurriculares">Extracurriculares</a></NavItem>
                             <NavItem><a href="/Enfases">Enfases</a></NavItem>
                             <NavItem><a href="/Notas-Corte">Notas</a></NavItem>
                             <NavItem><a href="/Manual-Bixo">Manual do Bixo</a></NavItem>
                        </NavList>
                        <LoginDiv>Aluno? <OrangePinkButton text="Login"/></LoginDiv>
                </NavBarContainer>
             );

        

        
        
}

export default NavBar;
