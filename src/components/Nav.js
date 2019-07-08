import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import lightTheme from "../themes/light"
import darkTheme from "../themes/dark"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const GlobalStyle = createGlobalStyle`
  html {background: ${props => props.theme.colors.background}}
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Nav = () => {
  const classes = useStyles()
  const stored = localStorage.getItem("lightMode")
  const [lightMode, setLightMode] = useState(stored === "true" ? true : false);

  return <ThemeProvider theme={lightMode === false ? darkTheme : lightTheme}>
    <div className={classes.root}>
      <GlobalStyle/>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>Easy TV Tracker</Typography>
          <Button color="inherit" onClick={() => {
            setLightMode(!lightMode);
            localStorage.setItem("lightMode", !lightMode);
          }}>Theme</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  </ThemeProvider>
}

export default Nav