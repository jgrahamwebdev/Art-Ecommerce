
import React from 'react'
import styled from 'styled-components';

import Announcement from '../components/HomeStructure/Announcement';
import Footer from '../components/HomeStructure/Footer';
import Navbar from '../components/HomeStructure/Navbar';


const Container = styled.div`

`;
const Wrapper = styled.div`
   display: flex;
   padding: 50px;
`;

const Left = styled.div`
  flex: 3;
`;
const Image = styled.img`
  width: 100%;
`;

const Right = styled.div`
display: flex;
flex-direction: column;
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Description = styled.p`
  font-size: .8rem;
  margin-bottom: 2rem;
`;

const Select = styled.select`
  width: 60%;
  margin-bottom: 3rem;
`;
const Option = styled.option`
  
`;
const Button = styled.button`
  width: 40%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  cursor: pointer;
`;


function ProductPage(props) {


  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Left> 
          <Image src='./popular/img-1.jpg'/>
        </Left>
        <Right>
          <Title>Mountain View</Title>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid quae libero velit, provident quam similique eos sit itaque quas earum ut dolorem beatae natus officia voluptatibus laborum explicabo nobis ab corrupti commodi incidunt labore pariatur.</Description>
          <Select>
            <Option>Select Size:</Option>
            <Option>8" x 10" $20</Option>
            <Option>18" x 24" $40</Option>
            <Option>20" x 30" $58</Option>
            <Option>24" x 48" $75</Option>
          </Select>
          <Button>Add to Cart</Button>
        </Right>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default ProductPage