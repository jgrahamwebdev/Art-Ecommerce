
import React from 'react'

import styled from 'styled-components';

import { Link } from "react-router-dom";

import { FiShoppingCart } from 'react-icons/fi';
import { HiSearch } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  max-width: 280px;
  height: 330px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eae8e5;
  position: relative;
`;

const Image = styled.img`
  height: 85%;
  width: 100%;
  margin: auto;
  object-fit: cover;
  z-index: 2;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  opacity: 0;
  transition: all .3s;
  &:hover {
    background-color: rgba(0,0,0,0.5);
    opacity: 1;
  }
`;


const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin: 0px 20px;
  font-size: 30px;
  transition: all .2s;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;


function Product({item}) {

  return (
    <Container>
     <Image src={item.img}/>
      <Info>
        <Link to="/productpage" style={{ textDecoration: 'none', color: '#fff' }}><Icon><HiSearch /></Icon></Link>
        <Icon>
          <AiOutlineHeart />
        </Icon>
        <Icon>
          <FiShoppingCart />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product