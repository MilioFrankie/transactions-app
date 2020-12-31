import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import { Navbar } from './components/navbar'

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <Navbar />
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={() => <div>Content for /another route</div>} exact path='/another' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
  display: grid;
  grid-row-gap: 25px;
`
const contentStyle = css`
  grid-row: 2;
`
