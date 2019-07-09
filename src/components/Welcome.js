import React from 'react'
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: grey;
  min-height: 500px;
  font-size: 3em;
`;

const Welcome = () => {
  return <WelcomeContainer>
    Welcome
  </WelcomeContainer>
}

export default Welcome