
//import React from 'react'
import styled from 'styled-components';

import { useState } from "react";

import { sliderArt } from '../../data';

import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #b2bec3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
  flex: 2;
  height: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 300;
`;
const Slogan = styled.h4`
  font-weight: 200;
  font-size: 1.5rem;
`
const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 20px;
`;


function Slider() {

  const [slideIndex, setSlideIndex] = useState(0)

const handleClick = function (dir) {
  if (dir === "left") {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4)
  } else {
    setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
  }
};

  return (
    <Container>

      <Arrow direction="left" onClick={() => handleClick("left")}>
        <AiOutlineLeft style={{color: 'black'}}/>
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderArt.map((item) => (

          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Slogan>{item.slogan}</Slogan>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>

        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <AiOutlineRight />
      </Arrow>

    </Container>
  )
}

export default Slider