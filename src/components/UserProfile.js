import React from 'react'
import styled from 'styled-components';

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: grey;
  min-height: 500px;
  font-size: 3em;
`;

const UserProfile = () => {
  return <UserProfileContainer>
    USER PROFILE
  </UserProfileContainer>
}

export default UserProfile