
import React from 'react'
import styled from 'styled-components';
import { paintingsImg } from '../../data';
import Product from "../Product";
import GoToTop from '../GoToTop';


const Container = styled.div`
  padding: 20px;
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
`

function Paintings() {
  return (
    <div>
      <Container>
      {paintingsImg.map((item) => (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
    <GoToTop />
    </div>
  )
}

export default Paintings