import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul<{open: boolean}>`
  z-index: 100;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 3vw;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #03194C;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

interface RightNavProps {
    open: boolean;
  }

const RightNav = ({ open }: RightNavProps) => {
  return (
    <Ul open={open}>
      <li><a href='/'>Home</a></li>
      <li><a href='/SAEComp'>SAEComp</a></li>
      <li><a href='/Default'>Ênfases</a></li>
      <li><a href='/Default'>Notas</a></li>
      <li><a href='/Manual-bixo'>Manual</a></li>
    </Ul>
  )
}

export default RightNav;