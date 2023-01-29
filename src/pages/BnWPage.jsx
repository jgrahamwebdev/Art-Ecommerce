
import React from 'react'
import styled from 'styled-components'

import Announcement from '../components/HomeStructure/Announcement';
import Footer from '../components/HomeStructure/Footer';
import Navbar from "../components/HomeStructure/Navbar"
import Newsletter from '../components/HomeStructure/Newsletter';
import BnW from '../components/BnW/BnWMap';

const Container = styled.div`
  
`;
const Title = styled.h1`
  margin: 20px;
  font-weight: 400;
  font-size: 3rem;
  text-decoration: underline 2px solid #000;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 10px;
`;

const Select = styled.select`
  
`;
const Option = styled.option`
  
`;

function BnWPage() {
  return (
      <Container>
      <Announcement />
      <Navbar />
      <Title>Black And White</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
          <Select>
            <Option>Type:</Option>
            <Option>Japanese Style</Option>
            <Option>Charcoal</Option>
            <Option>Pencil</Option>
            <Option>Photography</Option>
            <Option>Portrait</Option>
            <Option>Abtract</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <BnW />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default BnWPage