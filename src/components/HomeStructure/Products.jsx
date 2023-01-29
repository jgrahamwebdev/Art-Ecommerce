
import React from 'react'

import styled from 'styled-components';
import { popularProducts } from '../../data';
import Product from "../Product"


const Header = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 2.5rem;
  text-decoration: underline 1px;
`

const Container = styled.div`
  padding: 20px;
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
`

function Products() {
  return (
    <div>
    <Header>Some of Our Popular Art Pieces</Header>
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} img={item.img}/>
      ))}
    </Container>
    </div>
  )
}

export default Products