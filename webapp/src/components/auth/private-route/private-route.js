import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../../../context/auth-context'
import PropTypes from 'prop-types'

export function PrivateRoute ({ component: Component, ...rest }) {
  const { user } = useAuth()
  return (
    <Route
      {...rest}
      render={props =>
        user.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func
  ])
}
