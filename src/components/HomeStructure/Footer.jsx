
import React from 'react'

import styled from 'styled-components'

import { GrFacebook } from 'react-icons/gr';
import { FaTwitterSquare } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { GrPinterest } from 'react-icons/gr';

import { GoLocation } from 'react-icons/go';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcDiscover } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import { FaCcApplePay } from 'react-icons/fa';




const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  
`;
const Description = styled.p`
  font-size: .9rem;
  font-weight: 300;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  font-weight: 300;
  text-decoration: underline 1px solid #000;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: .8rem;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 10px;
  font-size: .8rem;
  display: flex;
  align-items: center;
`;

const Payment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 2rem;
  width: 60%;
  margin-top: 20px;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>art. Shop</Logo>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa quisquam aut soluta ex quasi optio omnis! Provident, alias?</Description>
        <SocialContainer>
          <SocialIcon>
            <GrFacebook />
          </SocialIcon>

          <SocialIcon>
            <FaTwitterSquare />
          </SocialIcon>

          <SocialIcon>
            <GrInstagram />
          </SocialIcon>

          <SocialIcon>
            <GrPinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful links:</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>My Favorites</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Blog</ListItem>          
          <ListItem>Our Art Collections</ListItem>          
          <ListItem>Talk to an Art Specialist</ListItem>
          <ListItem>Museums</ListItem>
          <ListItem>Galleries</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Contact Us</ListItem>

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><GoLocation style={{marginRight: '10px', fontSize: '1rem', }}/>
          1234 Van Gogh St. Somewhere, US. 12345
        </ContactItem>
        <ContactItem><AiOutlinePhone style={{marginRight: '10px', fontSize: '1rem', }}/>
          (123)888-8888
        </ContactItem>
        <ContactItem><AiOutlineMail style={{marginRight: '10px', fontSize: '1rem', }}/>
          contact@artshop.com
        </ContactItem>
        <Payment>
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcDiscover />
          <FaCcPaypal />
          <FaCcApplePay />
        </Payment>
      </Right>
    </Container>
  )
}

export default Footer