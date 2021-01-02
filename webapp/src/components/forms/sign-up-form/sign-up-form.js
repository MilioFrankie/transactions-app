import React, { useState } from 'react'
import { FormStyles as Styled } from '../form-styles'

const intialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export function SignUpForm () {
  const [signUpDetails, setSignUpDetails] = useState(intialState)
  const [validPassword, setValidPassword] = useState(true)

  const handleChange = ({ target: { name, value } }) => {
    setSignUpDetails(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    validatePassword() && window.alert(`Sign up GraphQL mutation coming soon ${signUpDetails.firstName}!`)
  }

  const validatePassword = () => {
    const { password, confirmPassword } = signUpDetails
    if (password === confirmPassword) {
      setValidPassword(true)
      return true
    } else {
      setValidPassword(false)
      return false
    }
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <label htmlFor='firstName'>First Name</label>
      <Styled.Input
        name='firstName'
        onChange={handleChange}
        placeholder='John'
        required
        type='text'
        value={signUpDetails.firstName}
      />
      <label htmlFor='lastName'>Last Name</label>
      <Styled.Input
        name='lastName'
        onChange={handleChange}
        placeholder='Doe'
        required
        type='text'
        value={signUpDetails.lastName}
      />
      <label htmlFor='dateOfBirth'>Date of Birth</label>
      <Styled.Input name='dateOfBirth' onChange={handleChange} required type='date' value={signUpDetails.dateOfBirth} />
      <label htmlFor='email'>Email</label>
      <Styled.Input
        name='email'
        onChange={handleChange}
        placeholder='john@example.com'
        required
        type='email'
        value={signUpDetails.email}
      />
      <label htmlFor='password'>Password</label>
      <Styled.Input
        name='password'
        onChange={handleChange}
        placeholder='your password'
        required
        type='password'
        value={signUpDetails.password}
      />
      <label htmlFor='confirmPassword'>Confirm Password</label>
      <Styled.Input
        name='confirmPassword'
        onBlur={validatePassword}
        onChange={handleChange}
        placeholder='confirm your password'
        required
        type='password'
        value={signUpDetails.confirmPassword}
      />
      {!validPassword && <Styled.ErrorText>*Oops one of you passwords don&#39;t match.</Styled.ErrorText>}
      <Styled.SubmitButton>Sign Up</Styled.SubmitButton>
    </Styled.Form>
  )
}
