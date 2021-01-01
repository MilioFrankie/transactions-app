import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarStyles as Styled } from './navbar-styles'

export const Navbar = () => {
  return (
    <Styled.NavbarContainer>
      <h1>My Transactions</h1>
      <nav>
        <Styled.ListContainer>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/sign-up'>Sign Up</Link>
          </li>
        </Styled.ListContainer>
      </nav>
    </Styled.NavbarContainer>
  )
}
