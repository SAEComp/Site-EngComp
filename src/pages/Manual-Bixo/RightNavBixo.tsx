import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul<{open: boolean}>`
  z-index: 100;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  overflow: scroll;
  overflow-x: hidden;
  li{
    padding: .5rem;
  }
  flex-flow: column nowrap;
  background-color: #e7a72f;
  position: fixed;
  transform: ${({ open }) => open ? 'translateY(-10%)' : 'translateY(120%)'};
  top: 17vh;
  right: 4vw;
  height: 75vh;
  width: 18vw;
  border-radius: 1.1rem;
  transition: all 0.2s ease-in-out;
  font-family: 'Oxygen';
  font-size: 1.1rem;
  a{
  color: #0c1f3b;
  }
  @media (max-width: 760px){
    margin-bottom: 13rem;
    height: 70vh;
    width: 50vw;
    margin-top: .5rem;
    li{
      margin-left: -1rem;
    }
  }
`;

interface RightNavBixoProps {
    open: boolean;
  }

const RightNavBixo = ({ open }: RightNavBixoProps) => {
  return (
    <Ul open={open}>
      <div style = {{marginTop: '1.5rem'}}>
      <li><a href='#t1'>1. Bem Vindo!</a></li>
      <li><a href='#t2'>2. SAEComp</a></li>
      <li><a href='#t3'>3. CAASO</a></li>
      <li><a href='#t4'>4. O Curso</a></li>
      <li><a href='#t5'>5. SEnC</a></li>
      <li><a href='#t6'>6. O Campus</a></li>
      <li><a href='#t7'>7. Matrícula</a></li>
      <li><a href='#t8'>8. Graduação</a></li>
      <li><a href='#t9'>9. Número USP/</a></li>
      <li><a href='#t10'>10. E-mail USP</a></li>
      <li><a href='#t11'>11. JúpiterWEB</a></li>
      <li><a href='#t12'>12. G-Suite USP</a></li>
      <li><a href='#t13'>13. Cartão USP</a></li>
      <li><a href='#t14'>14. Aplicativos USP</a></li>
      <li><a href='#t15'>15. Conectividade</a></li>
      <li><a href='#t16'>16. São Carlos</a></li>
      <li><a href='#t17'>17. Dicas</a></li>
      <li><a href='#t18'>18. Extracurriculares</a></li>
      </div>
    </Ul>
  )
}

export default RightNavBixo;