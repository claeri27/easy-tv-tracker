import React, { useState } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
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

const Nav = () => {
  const stored = localStorage.getItem("lightMode")
  const [lightMode, setLightMode] = useState(stored === "true" ? true : false);

  return <ThemeProvider theme={lightMode === false ? darkTheme : lightTheme}>
    <NavContainer>
      <GlobalStyle />
      <TitleContainer>EzTvT</TitleContainer>
      <ButtonsContainer>
        <Button onClick={() => {
          setLightMode(!lightMode);
          localStorage.setItem("lightMode", !lightMode);
        }}>Theme</Button>
        <Button>LOGIN</Button>
        <Button>REGISTER</Button>
      </ButtonsContainer>
      </NavContainer>
  </ThemeProvider>
}

export default Nav