
import React from 'react'

import styled from 'styled-components';

import { photocategory } from '../../data';
import { paintingcategory } from '../../data';
import { bnwcategory } from '../../data';

import PhotographyCategory from '../Photography/PhotographyCategory';
import PaintingCategory from '../Paintings/PaintingCategory';
import BnWCategory from '../BnW/BnWCategory';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.h1`
  font-weight: 300;
  font-size: 2.5rem;
  text-decoration: underline 1px;
`

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

function Categories() {
  return (
    <MainContainer>
      <Header>Choose Your Style of Art:</Header>
    <Container>
      {photocategory.map((item) => (
        <PhotographyCategory item={item} key={item.id}/>
      ))}
      {paintingcategory.map((item) => (
        <PaintingCategory item={item} key={item.id}/>
      ))}
      {bnwcategory.map((item) => (
        <BnWCategory item={item} key={item.id}/>
      ))}
    </Container>
    </MainContainer>
  )
}

export default Categories