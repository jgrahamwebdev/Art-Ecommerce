//import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: #999;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 300;
`

function Announcement() {
  return (
    <Container>
      Free Shipping on Orders Over $50!
    </Container>
  )
}

export default Announcement