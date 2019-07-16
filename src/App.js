import React, { useState, useEffect, useCallback } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import client from './client'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import Nav from './components/Nav'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Welcome from './components/Welcome'
import UserProfile from './components/UserProfile'

const AppContainer = styled.div``
const TestButton = styled.button``
const LocalClearButton = styled.button``
const RouteContainer = styled.div``

const QueryButton = styled.button``

const App = () => {
  const [decoded, setDecoded] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [redirectInfo, setRedirectInfo] = useState('/')
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      setDecoded(jwtDecode(token))
    }
  }, [token])

  const renderRedirect = useCallback(() => {
    if (redirect) return <Redirect to={redirectInfo} />
  }, [redirect, redirectInfo])

  useEffect(() => {
    renderRedirect()
    setRedirect(false)
  }, [redirect, renderRedirect])

  const handleRedirect = () => {
    setRedirect(true)
  }

  const handleRedirectInfo = newValue => {
    setRedirectInfo(newValue)
  }

  const GetStuff = gql`
    {
      Shows(network: "The CW", status: "Running") {
        name
        status
      }
    }
  `

  const showList = () => (
    <Query
      query={gql`
        {
          Shows(network: "The CW", status: "Running") {
            name
            status
          }
        }
      `}>
      {({ loading, error, data }) => {
        if (loading) return <h1>LOADING...</h1>
        if (error) return <h1>UNABLE TO CONNECT TO SERVER</h1>

        return data.Shows.map(({ name, status }) => (
          <div key={name}>
            <p>
              {name}: {status}
            </p>
          </div>
        ))
      }}
    </Query>
  )

  return (
    <Router>
      {renderRedirect()}
      <AppContainer>
        <Nav
          decoded={decoded}
          handleRedirect={handleRedirect}
          handleRedirectInfo={handleRedirectInfo}
        />
        <QueryButton
          onClick={() => {
            client
              .query({
                query: GetStuff,
              })
              .then(console.log)
          }}>
          QUERY
        </QueryButton>
        <TestButton
          onClick={() => {
            console.log('TOKEN: ', localStorage.getItem('token'))
          }}>
          TEST
        </TestButton>
        <LocalClearButton
          onClick={() => {
            localStorage.clear('token')
          }}>
          CLEAR LOCAL
        </LocalClearButton>
        {showList()}
        <RouteContainer>
          <Route exact path="/" component={token ? Home : Welcome} />
          <Route
            path="/login/"
            render={() => (
              <Login
                handleRedirect={handleRedirect}
                handleRedirectInfo={handleRedirectInfo}
              />
            )}
          />
          <Route
            path="/register/"
            render={() => (
              <Register
                handleRedirect={handleRedirect}
                handleRedirectInfo={handleRedirectInfo}
              />
            )}
          />
          <Route path="/user/" component={UserProfile} />
        </RouteContainer>
      </AppContainer>
    </Router>
  )
}

export default App
