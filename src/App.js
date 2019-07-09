import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from "./components/Nav"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Welcome from "./components/Welcome"

const AppContainer = styled.div`
`;

const App = () => {
  return <Router>
    <AppContainer>
      <Nav />
      <Route exact path="/" component={Welcome} />
      <Route path="/home/" component={Home} />
      <Route path="/login/" component={Login} />
      <Route path="/register/" component={Register} />
    </AppContainer> 
  </Router>
}

export default App;
