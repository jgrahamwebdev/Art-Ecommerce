
import React from 'react'
import styled from 'styled-components'

import Announcement from '../components/HomeStructure/Announcement';
import Footer from '../components/HomeStructure/Footer';
import Navbar from "../components/HomeStructure/Navbar"
import Newsletter from '../components/HomeStructure/Newsletter';
import Paintings from '../components/Paintings/PaintingsMap';

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

function PaintingsPage() {
  return (
      <Container>
      <Announcement />
      <Navbar />
      <Title>Paintings</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
          <Select>
            <Option>Type:</Option>
            <Option>Modernist</Option>
            <Option>Expressionist</Option>
            <Option>Portrait</Option>
            <Option>Abstract</Option>
            <Option>Impressionist</Option>
            <Option>Nature</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Paintings />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default PaintingsPage