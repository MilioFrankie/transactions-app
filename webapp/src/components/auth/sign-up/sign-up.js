import React from 'react'
import { SignUpForm } from '../../forms/sign-up-form'
import { FormStyles as Styled } from '../../forms/form-styles'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <Styled.FormContainer>
      <Styled.FormTitle>Sign Up</Styled.FormTitle>
      <SignUpForm />
      <Link to='/login'>Already have an account? Login</Link>
    </Styled.FormContainer>
  )
}
