
import React from 'react'
import styled from 'styled-components';

import { FiSend } from 'react-icons/fi';




const Container = styled.div`
  height: 60vh;
  background-image: url(../images/background-img.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  background-color: rgba(200, 200, 200, 0.7);
  height: 70%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 70px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: .5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  background-color: #000;
  color: #fff;
  &:active {
    background-color: #fff;
    color: #000;
  }
`;


function Newsletter() {
  return (
    <Container>
      <InnerContainer>
      <Title>Newsletter</Title>
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Description>
      <InputContainer>
       <Input placeholder='Your Email'/>
       <Button>
        <FiSend />
       </Button>
      </InputContainer>
      </InnerContainer>
    </Container>
  )
}

export default Newsletter