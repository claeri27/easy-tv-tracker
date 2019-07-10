import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route} from 'react-router-dom'
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
  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token) setLogged(true)
  }, [token])
  
  const handleLogged = newValue => {
    setLogged(newValue)
  }

  return <Router>
      <AppContainer>
        <Nav handleLogged={handleLogged} />
        <TestButton onClick={() => {
          console.log('TOKEN: ', localStorage.getItem('token'), 'LOGGED?: ', logged);
        }}>TEST</TestButton>
        <LocalClearButton onClick={() => {
          localStorage.clear()
          setLogged(false)
        }}>CLEAR LOCAL</LocalClearButton>
        <RouteContainer>
          <Route exact path="/" component={Welcome} />
          <Route path="/home/" component={Home} />
          <Route 
            path="/login/"
            render={() => 
              <Login logged={logged} handleLogged={handleLogged} />
            } 
          />
          <Route path="/register/" component={Register} />
          <Route path="/user/" component={UserProfile} />
        </RouteContainer>
      </AppContainer> 
    </Router>
}

export default App;
