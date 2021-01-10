import React, { useState } from 'react'
import { FormStyles as Styled } from '../form-styles'
import { useAuth } from '../../../context/auth-context'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const intialState = {
  email: '',
  password: ''
}

function LoginForm ({ history, user }) {
  const [loginDetail, setLoginDetail] = useState(intialState)
  const { setUser } = useAuth()
  const handleChange = ({ target: { name, value } }) => {
    setLoginDetail(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    // set fake auth and user
    setUser((prevState) => ({ ...prevState, authenticated: true, user: user }))
    history.push('/')
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <Styled.Input
        id='email'
        name='email'
        onChange={handleChange}
        placeholder='john@example.com'
        required
        type='email'
        value={loginDetail.email}
      />
      <label htmlFor='password'>Password</label>
      <Styled.Input
        id='password'
        name='password'
        onChange={handleChange}
        placeholder='your password'
        required
        type='password'
        value={loginDetail.password}
      />
      <Styled.SubmitButton>Login</Styled.SubmitButton>
    </Styled.Form>
  )
}

export const LoginFormWithRouter = withRouter(LoginForm)

LoginForm.propTypes = {
  history: PropTypes.any,
  user: PropTypes.object
}
