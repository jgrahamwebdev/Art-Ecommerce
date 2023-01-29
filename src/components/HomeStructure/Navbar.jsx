
//import React from 'react'
import styled from 'styled-components'

//REACT ICONS
import { HiSearch } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';

import { Link } from "react-router-dom";

const Container = styled.div`
  height: 5rem;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: 700;
  transition: all .1s;
  &:hover {
    color: #888;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 25px;
  position: relative;
`
const CartBadge = styled.div`
  height: 18px;
  width: 18px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -35%;
  left: 70%;
  color: #fff;
  font-size: .7rem;
`



function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
           <Input />
           <HiSearch style={{color: 'grey', fontSize: '15px'}}/>
          </SearchContainer>
        </Left>
        <Center>
        <Link to="/" style={{ textDecoration: 'none', color: '#000' }}><Logo>art. Shop</Logo></Link>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <Link to="/cart" style={{ textDecoration: 'none', color: '#000' }}><FiShoppingCart style={{fontSize: '20px'}}/></Link>
            <CartBadge>1</CartBadge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar