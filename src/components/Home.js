import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: grey;
  min-height: 500px;
  font-size: 3em;
`

const Home = () => {
  return <HomeContainer>HOME</HomeContainer>
}

export default Home
