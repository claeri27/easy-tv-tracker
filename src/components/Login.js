import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: grey;
  min-height: 500px;
  font-size: 3em;
`;

const BASE_URL = 'http://localhost:3000'

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [token, setToken] = useState('');
  // const [logged, setLogged] = useState(false);

  return <LoginContainer>
    LOGIN
  </LoginContainer>
}

export default Login