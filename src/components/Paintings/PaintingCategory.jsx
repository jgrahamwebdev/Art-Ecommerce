
import React from 'react'

import styled from 'styled-components';

import { Link } from "react-router-dom";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  display: flex;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: all .4s;
  opacity: 0;
  
  &:hover {
    background-color: rgba(0,0,0,0.8);
    opacity: 1;
  }
`;
const Title = styled.h1`
  color: #fff;
  font-weight: 300;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  background-color: #fff;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background-color: #888;
    color: #fff;
    opacity: 1;
  }
`;

function PaintingCategory({item}) {

  
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button><Link to="/paintingspage" style={{ textDecoration: 'none', color: '#000' }}>Shop Now</Link></Button>
      </Info>
    </Container>    
  )
}

export default PaintingCategory