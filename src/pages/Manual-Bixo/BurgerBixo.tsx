import React, { useState } from 'react';
import styled from 'styled-components';
import RightNavBixo from './RightNavBixo';

const StyledBurgerBixo = styled.div<{open: boolean}>`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  position: fixed;
  top: 85vh;
  right: 4vw;
  transition: all .25s linear;
  background-color: ${({ open }) => open ? '#e7a72f' : '#e7a72f'};
  border-radius: 1.1rem;
  font-family: 'Oxygen';
  font-size: 2rem;
  color: #fff;
  transition: all 1s linear;
  .start{
    color: white;
    z-index: 0;
    margin-left: 1.18rem;
    padding-bottom: .5rem;
    opacity: ${({open}) => open ? 0:1};
    
  };
  .x{
    margin-top: -3.5rem;
    margin-left: .83rem;
    z-index: 1;
    opacity: ${({open}) => open ? 1:0};
    color: white;
  };
`;

const BurgerBixo = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
    
      <StyledBurgerBixo open={open} onClick={() => setOpen(!open)}>
        <div className='start'>!</div>
        <div className='x'>X</div>
      </StyledBurgerBixo>
      <RightNavBixo open={open}/>
    </>
  )
}

export default BurgerBixo