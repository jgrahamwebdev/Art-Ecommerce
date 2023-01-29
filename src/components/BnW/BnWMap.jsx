
import React from 'react'
import styled from 'styled-components';
import { BnWImg } from '../../data';
import Product from "../Product";
import GoToTop from '../GoToTop';


const Container = styled.div`
  padding: 20px;
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
`

function BnW() {
  return (
    <div>
      <Container>
      {BnWImg.map((item) => (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
    <GoToTop />
    </div>
  )
}

export default BnW