import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css } from '@emotion/core'
import { Navbar } from './components/navbar'
import { Login } from './components/auth/login'
import { SignUp } from './components/auth/sign-up'
import { DashboardView } from './dashboard/dashboard-view'
import { PrivateRoute } from './components/auth/private-route'

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <Navbar />
        <div className='main-content' css={contentStyle}>
          <PrivateRoute component={DashboardView} exact path='/' />
          <Route component={Login} exact path='/login' />
          <Route component={SignUp} exact path='/sign-up' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
  display: grid;
`
const contentStyle = css`
  grid-row: 2;
`
