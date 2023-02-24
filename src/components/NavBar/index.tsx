import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { LogoDiv } from './styles';

const Nav = styled.nav<{scrollY: number}>`
  position: fixed;
  font-family: 'Ubuntu';
  top: 0;
  background-color: black;
  background-color: ${({ scrollY }) => ( (scrollY > document.documentElement.clientHeight) ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.2)")};
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: background-color 0.3s ease-in-out;
  z-index: 100;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    padding: 15px 0;
  }
  a{
    text-decoration: none;
    color: white;
    &:hover{
            color: rgb(238, 9, 121);
            text-shadow:0px 0px 25px white;
        }
        transition:text-shadow 0.3s;
        transition: color 0.3s;
  }
`

const Navbar = () => {

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

  return (
    <Nav scrollY = {scrollY}>
      <LogoDiv><a href="#">ENG<span>COMP</span></a></LogoDiv>
      <Burger />
    </Nav>
  )
}

export default Navbar