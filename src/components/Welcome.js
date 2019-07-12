import React from 'react'
import styled from 'styled-components'

const WelcomeContainer = styled.div`
  display: flex;
  background: grey;
  min-height: 500px;
`

const Header = styled.h3``

const ShowsContainer = styled.div``

const TestButton = styled.button``

const Welcome = () => {
  return (
    <WelcomeContainer>
      <Header>Keep track of all your favorite TV shows!</Header>
      <ShowsContainer></ShowsContainer>
    </WelcomeContainer>
  )
}

export default Welcome
