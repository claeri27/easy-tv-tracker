import React, { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'
import lightTheme from "../themes/light"
import darkTheme from "../themes/dark"

const GlobalStyle = createGlobalStyle`
  html {background: ${props => props.theme.colors.background}}
`;

const NavContainer = styled.div`
  display: flex;
  position: static;
  height: 60px;
  background: blue;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.h1`
  margin-left: 10px;
  user-select: none;
`;

const ButtonsContainer = styled.div`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 5px;
  cursor: pointer;
`;

const Nav = props => {
  const token = localStorage.getItem('token')
  const stored = localStorage.getItem("lightMode")
  const [lightMode, setLightMode] = useState(stored === "true" ? true : false);

  const LoggedOutButtons = () => {
    return <ButtonsContainer>
      <Button onClick={() => {
        setLightMode(!lightMode);
        localStorage.setItem("lightMode", !lightMode);
      }}>Theme</Button>
      <Link to='/login/'>
        <Button>LOGIN</Button>
      </Link>
      <Link to='/register/'>
        <Button>REGISTER</Button>
      </Link>
    </ButtonsContainer>
  }

  const LoggedInButtons = () => {
    return <ButtonsContainer>
      <Link to='/user/'>
        <Button>{localStorage.getItem('username')}</Button>
      </Link>
      <Button onClick={() => {
        localStorage.clear('token', 'username')
        props.handleLogged(false)
        props.handleRedirectInfo('/')
        props.handleRedirect()
      }}>LOGOUT</Button>
    </ButtonsContainer>
  }

  return <ThemeProvider theme={lightMode === false ? darkTheme : lightTheme}>
      <NavContainer>
        <GlobalStyle />
        <Link to={token ? '/home' : '/'} style={{ textDecoration: 'none', color: 'black'}}>
          <TitleContainer>EzTvT</TitleContainer>
        </Link>
        {token ? LoggedInButtons() : LoggedOutButtons()}
      </NavContainer>
  </ThemeProvider>
}

export default Nav