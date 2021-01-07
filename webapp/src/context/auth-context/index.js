import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext({})

// fake auth user
export function AuthProvider ({ children }) {
  const [user, setUser] = useState({ user: {}, authenticated: false })

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

AuthProvider.propTypes = {
  children: PropTypes.object
}
