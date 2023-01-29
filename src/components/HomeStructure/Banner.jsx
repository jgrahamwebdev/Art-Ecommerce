
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex; 
  height: 30vh;
  margin: 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  border-top: 1px solid #b0b0b0;
  border-bottom: 1px solid #b0b0b0;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
`;
const Logo = styled.span`
  font-weight: 700;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
`;
const Button = styled.img`
  width: 8rem;
  height: auto;
  object-fit: contain;
  margin-right: 30px;
  cursor: pointer;
`;
const Right = styled.div`
display: flex;
align-items: center;
justify-content: center;
  flex: 1.6;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

function Banner() {
  return (
    <Container>
      <Left>
        <Title>Try out <Logo>art. Shop</Logo> on our App</Title>
        <Buttons>
          <Button src="./appBanner-imgs/apple-app.png"/>
          <Button src="./appBanner-imgs/google-app.png"/>
        </Buttons>
      </Left>
      <Right>
        <BannerImg src="./appBanner-imgs/banner-img.jpg"/>
      </Right>
    </Container>
  )
}

export default Banner