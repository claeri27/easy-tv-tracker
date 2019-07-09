import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const RegisterContainer = styled.div`
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

const EmailLabel = styled.label`
`;

const UsernameLabel = styled.label`
`;

const PasswordLabel = styled.label`
`;

const EmailInput = styled.input`
  padding: 6px;
  margin: 2px;
`;

const UsernameInput = styled.input`
  padding: 6px;
  margin: 2px;
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

const BASE_URL = 'http://localhost:3001'

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useState('');
  // const [logged, setLogged] = useState(false);

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/register`, {
      email,
      username,
      password,
    })
  }

  return <RegisterContainer>
    <FormContainer onSubmit={handleSubmit}>
      <EmailLabel>
        E-mail: {` `}
        <EmailInput type="email" name="email" value={email} onChange={handleEmailChange} />
      </EmailLabel>
      <br></br>
      <UsernameLabel>
        Username: {` `}
        <UsernameInput type="text" name="username" value={username} onChange={handleUsernameChange} />
      </UsernameLabel>
      <br></br>
      <PasswordLabel>
        Password: {` `}
        <PasswordInput type="text" name="password" value={password} onChange={handlePasswordChange} />
      </PasswordLabel>
      <br></br>
      <SubmitButton type="submit">REGISTER</SubmitButton>
    </FormContainer>
  </RegisterContainer>
}

export default Register