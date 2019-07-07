import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"

const GlobalStyle = createGlobalStyle `
  html {background: ${props => props.theme.colors.background}}
`;

const AppContainer = styled.div `
`;

const Button = styled.button `
`;

const App = () => {
  const stored = localStorage.getItem("lightMode")
  const [lightMode, setLightMode] = useState(stored === "true" ? true : false);

    return <ThemeProvider theme = {lightMode === false ? darkTheme : lightTheme}>
      <AppContainer>
        <GlobalStyle />
        <Button onClick = {() => {
          setLightMode(!lightMode);
          localStorage.setItem("lightMode", !lightMode);
        }}>THEME</Button> 
      </AppContainer> 
    </ThemeProvider>
}

export default App;
