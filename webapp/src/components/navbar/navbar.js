import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
import { NavbarStyles as Styled } from './navbar-styles'
import { PlainButton } from '../tables/transactions-table/transactions-table-styles'

export function Navbar () {
  const { user, setUser } = useAuth()

  return (
    <Styled.NavbarContainer>
      <h1><Link to='/'>Transaction Dashboard</Link></h1>
      <nav>
        <Styled.ListContainer>
          {user.authenticated ? (
            <li>
              <PlainButton onClick={() => setUser(prevState => !prevState.authenticated)}>Logout</PlainButton>
            </li>
          ) : (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/sign-up'>Sign Up</Link>
              </li>
            </>
          )}
        </Styled.ListContainer>
      </nav>
    </Styled.NavbarContainer>
  )
}
