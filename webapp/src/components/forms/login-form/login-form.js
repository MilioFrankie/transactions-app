import React, { useState } from 'react'
import { FormStyles as Styled } from '../form-styles'

const intialState = {
  email: '',
  password: ''
}

export function LoginForm () {
  const [loginDetail, setLoginDetail] = useState(intialState)

  const handleChange = ({ target: { name, value } }) => {
    setLoginDetail(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    window.alert('Auth for login comeing soon.')
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <Styled.Input
        name='email'
        onChange={handleChange}
        placeholder='john@example.com'
        required
        type='email'
        value={loginDetail.email}
      />
      <label htmlFor='password'>Password</label>
      <Styled.Input
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
