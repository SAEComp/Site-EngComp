import { useState, useEffect } from "react";
import logo from '../../../assets/svg/logo.svg';
import { useNavigate } from "react-router-dom";
import { NavBarContainer, NavButtonsContainer, NavButton, LoginButton, Logo, HamburgerButton, SideMenu, SideMenuButton } from "../../../pages/Default/styles.tsx";

const NavBar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <NavBarContainer>
            <Logo
                alt="logo SaeComp"
                src={logo}
                onClick={() => navigate('/')}
            />
            <NavButtonsContainer>
                <NavButton onClick={() => navigate('/home')}>Home</NavButton>
                <NavButton onClick={() => navigate('/saecomp')}>SAEComp</NavButton>
                <NavButton onClick={() => navigate('/avaliacao')}>Avaliação de Professores</NavButton>
                <NavButton onClick={() => navigate('/enfases')}>Ênfases</NavButton>
                <NavButton onClick={() => navigate('/notas')}>Notas</NavButton>
                <NavButton onClick={() => navigate('/manual')}>Manual</NavButton>
                <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>
            </NavButtonsContainer>
            
            <HamburgerButton onClick={toggleMenu}>
                {isMenuOpen ? "✖" : "☰"}
            </HamburgerButton>
            
            <SideMenu isOpen={isMenuOpen}>
                <SideMenuButton onClick={() => { toggleMenu(); navigate('/home'); }}>Home</SideMenuButton>
                <SideMenuButton onClick={() => { toggleMenu(); navigate('/saecomp'); }}>SAEComp</SideMenuButton>
                <SideMenuButton onClick={() => { toggleMenu(); navigate('/avaliacao'); }}>Avaliação de Professores</SideMenuButton>
                <SideMenuButton onClick={() => { toggleMenu(); navigate('/enfases'); }}>Ênfases</SideMenuButton>
                <SideMenuButton onClick={() => { toggleMenu(); navigate('/notas'); }}>Notas</SideMenuButton>
                <SideMenuButton onClick={() => { toggleMenu(); navigate('/manual'); }}>Manual</SideMenuButton>
                <SideMenuButton onClick={() => { toggleMenu(); navigate('/login'); }}>Login</SideMenuButton>
            </SideMenu>
        </NavBarContainer>
    );
};

export default NavBar;
