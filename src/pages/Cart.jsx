
import React from 'react'

import styled from 'styled-components'

import Announcement from "../components/HomeStructure/Announcement"
import Navbar from "../components/HomeStructure/Navbar"
import Footer from "../components/HomeStructure/Footer"

const Container = styled.div`
  
`;
const CartBox = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
`;
const CartItems = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;


const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-left: 10px;
  text-decoration: underline 2px solid #000;
`;


const CategoryBox = styled.div`
  background-color: #fff;
  width: 95%;
  height: 2rem; 
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CategoryTitle = styled.h2`
  flex: 1;
  font-size: 1.1rem;
  font-weight: 300;
  text-decoration: underline 1px solid #000;
  padding-left: 5px;
`;


const ItemBox = styled.div`
  width: 95%;
  height: 20%;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
`;

const Product = styled.div`
  flex: 1;
`;
const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
`;
const ItemTitle = styled.h3`
  font-weight: 300;
  font-size: 1.4rem;
  padding-left: 5px;
`;
const ItemCategory = styled.h3`
  font-weight: 300;
  font-size: .8rem;
  padding-left: 5px;
  font-style: italic;
  color: #888;
`;
const Size = styled.h3`
  font-weight: 200;
  font-size: 1.1rem;
  padding-left: 5px;
`;

const Quantity = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
`;
const Select = styled.select`
  width: 4rem;
  margin-left: 5px;
  text-align: center;
`;
const Option = styled.option`

`;

const Price = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
`;
const ItemAmount = styled.h3`
  font-size: 1.4rem;
  font-weight: 300;
  padding-left: 5px;
`;


const CartTotal = styled.div`
  flex: 1;
  background-color: #fff;
`;

const SummaryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Category = styled.h2`
  font-size: 1.1rem;
  font-weight: 300;
  text-decoration: underline 1px solid #000;
`;
const Amount = styled.h3`
  font-size: 1.1rem;
  font-weight: 300;
  margin-left: auto;
  margin-right: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
`;

const Button = styled.button`
  width: 85%;
  padding: 15px;
  border: none;
  border-radius: 40px;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all .2s;
  margin-bottom: 1rem;

  &:hover {
    background-color: #999;
  }
`;

const PaypalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  padding: 20px;
  border: none;
  border-radius: 40px;
  background-color: #d9dedf;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all .2s;

  &:hover {
    background-color: #b1b0b0;
  }
`;

const Paypal = styled.img`
  width: 15%;
  height: 15%;
`


function Cart() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <CartBox>

        <CartItems>
          <Title>Your Cart:</Title>

          <CategoryBox>
            <CategoryTitle>Product</CategoryTitle>
            <CategoryTitle>Detail</CategoryTitle>
            <CategoryTitle>Quantity</CategoryTitle>
            <CategoryTitle>Price</CategoryTitle>
          </CategoryBox>

          <ItemBox>
            <Product>
              <ProductImg src="./paintings/img-1.jpg"/>
            </Product>
            

            <ProductInfo>
              <ItemTitle>Fresh Juice</ItemTitle>
              <ItemCategory>Painting</ItemCategory>
              <Size>48" x 24"</Size>
            </ProductInfo>

            <Quantity>
              <Select>
                <Option>1</Option>
                <Option>2</Option>
                <Option>3</Option>
                <Option>4</Option>
                <Option>5</Option>
                <Option>6</Option>
                <Option>7</Option>
                <Option>8</Option>
                <Option>9</Option>
                <Option>10</Option>
              </Select>
            </Quantity>

            <Price>
              <ItemAmount>$0.00</ItemAmount>
            </Price>
          </ItemBox>

        </CartItems>

        <CartTotal>
          <Title>Summary:</Title>
          <SummaryBox>
            <Category>Subtotal:</Category>
            <Amount>$0.00</Amount>
          </SummaryBox>
          <SummaryBox>
            <Category>Estimated Shipping & Handling:</Category>
            <Amount>$0.00</Amount>
          </SummaryBox>
          <SummaryBox>
            <Category>Estimated Tax:</Category>
            <Amount>--</Amount>
          </SummaryBox>
          <SummaryBox>
            <Category>Total:</Category>
            <Amount>$0.00</Amount>
          </SummaryBox>
          <ButtonBox>
            <Button>Checkout Now</Button>
            <PaypalBtn><Paypal src='./images/paypal.png'></Paypal></PaypalBtn>
          </ButtonBox>
        </CartTotal>

      </CartBox>
      <Footer />
    </Container>
  )
}

export default Cart