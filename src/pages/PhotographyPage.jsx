
import React from 'react'
import styled from 'styled-components'

import Announcement from '../components/HomeStructure/Announcement';
import Footer from '../components/HomeStructure/Footer';
import Navbar from "../components/HomeStructure/Navbar"
import Newsletter from '../components/HomeStructure/Newsletter';
import PhotographyMap from '../components/Photography/PhotographyMap';

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

function PhotographyPage() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Photography</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
          <Select>
            <Option>Type:</Option>
            <Option>Nature/Wildlife</Option>
            <Option>Fashion</Option>
            <Option>Portrait</Option>
            <Option>Architectural</Option>
            <Option>Editorial</Option>
            <Option>Sport</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <PhotographyMap />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default PhotographyPage