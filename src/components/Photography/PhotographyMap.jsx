
import React from 'react'

import styled from 'styled-components';
import { photographyImg } from '../../data';
import GoToTop from '../GoToTop';
import Product from '../Product';


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

function PhotographyMap() {
  return (
    <div>
    
    <Container>
      {photographyImg.map((item) => (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
    <GoToTop />
    </div>
  )
}

export default PhotographyMap