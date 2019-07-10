import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Nav from "./components/Nav"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Welcome from "./components/Welcome"
import UserProfile from "./components/UserProfile"

const AppContainer = styled.div``
const TestButton = styled.button``
const LocalClearButton = styled.button``
const RouteContainer = styled.div``

const App = () => {
  const [logged, setLogged] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectInfo, setRedirectInfo] = useState('/');
  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token) setLogged(true)
  }, [token])

  const renderRedirect = useCallback(() => {
    if (redirect) return <Redirect to={redirectInfo} />
  }, [redirect, redirectInfo])

  useEffect(() => {
    renderRedirect()
    setRedirect(false)
  }, [redirect, renderRedirect])

  const handleLogged = newValue => {
    setLogged(newValue)
  }

  const handleRedirect = () => {
    setRedirect(true)
  }

  const handleRedirectInfo = newValue => {
    setRedirectInfo(newValue)
  }

  return <Router>
      {renderRedirect()}
      <AppContainer>
        <Nav 
          handleLogged={handleLogged}
          handleRedirect={handleRedirect} 
          handleRedirectInfo={handleRedirectInfo}
        />
        <TestButton onClick={() => {
          console.log('TOKEN: ', localStorage.getItem('token'), 'LOGGED?: ', logged);
        }}>TEST</TestButton>
        <LocalClearButton onClick={() => {
          localStorage.clear('token', 'username')
          setLogged(false)
        }}>CLEAR LOCAL</LocalClearButton>
        <RouteContainer>
          <Route exact path="/" component={Welcome} />
          <Route path="/home/" component={Home} />
          <Route 
            path="/login/"
            render={() => 
              <Login 
                handleLogged={handleLogged} 
                handleRedirect={handleRedirect} 
                handleRedirectInfo={handleRedirectInfo} />}/>
          <Route 
            path="/register/" 
            render={() =>
              <Register
                handleLogged={handleLogged}
                handleRedirect={handleRedirect}
                handleRedirectInfo={handleRedirectInfo} />}/>
          <Route path="/user/" component={UserProfile} />
        </RouteContainer>
      </AppContainer> 
    </Router>
}

export default App;
