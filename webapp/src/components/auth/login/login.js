import React from 'react'
import { LoginForm } from '../../forms/login-form'
import { FormStyles as Styled } from '../../forms/form-styles'
import { Link } from 'react-router-dom'

export function Login () {
  return (
    <Styled.FormContainer>
      <Styled.FormTitle>Login</Styled.FormTitle>
      <LoginForm />
      <Link to='/sign-up'>Don&#39;t have an account? Sign Up</Link>
    </Styled.FormContainer>
  )
}
