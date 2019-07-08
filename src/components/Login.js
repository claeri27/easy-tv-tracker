import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: grey;
  min-height: 300px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const UsernameContainer = styled.label`
`;

const UsernameInput = styled.input`
  padding: 6px;
  margin: 2px;
`;

const PasswordContainer = styled.label`
`;

const PasswordInput = styled.input`
  padding: 6px;
  margin: 2px;
`;

const SubmitButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: springgreen;
  }
  &:focus {
    outline: none;
  }
`;

const BASE_URL = 'http://localhost:3000'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useState('');
  // const [logged, setLogged] = useState(false);

  return <LoginContainer>
    <FormContainer>
      <UsernameContainer>
        Username: {` `}
        <UsernameInput type="text" name="username" value={username}/>
      </UsernameContainer>
      <br></br>
      <PasswordContainer>
        Password: {` `}
        <PasswordInput type="text" name="password" value={password}/>
      </PasswordContainer>
      <br></br>
      <SubmitButton type="submit">LOGIN</SubmitButton>
    </FormContainer>
  </LoginContainer>
}

export default Login