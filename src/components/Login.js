import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const BASE_URL = 'http://localhost:3001'

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

const UsernameLabel = styled.label`
`;

const UsernameInput = styled.input`
  padding: 6px;
  margin: 2px;
`;

const PasswordLabel = styled.label`
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

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const resp = await axios.post(`${BASE_URL}/login`, { username, password })
    if (!resp.data.token) {
      alert(resp.data.msg)
    } else {
      localStorage.setItem('token', resp.data.token)
      props.handleRedirectInfo(() => '/')
      props.handleRedirect()
    }
  }

  return <LoginContainer>
    <FormContainer onSubmit={handleSubmit}>
      <UsernameLabel>
        Username: {` `}
        <UsernameInput type="text" name="username" value={username} onChange={handleUsernameChange} />
      </UsernameLabel>
      <br></br>
      <PasswordLabel>
        Password: {` `}
        <PasswordInput type="password" name="password" value={password} onChange={handlePasswordChange} />
      </PasswordLabel>
      <br></br>
      <SubmitButton type="submit">LOGIN</SubmitButton>
    </FormContainer>
  </LoginContainer>
}

export default Login