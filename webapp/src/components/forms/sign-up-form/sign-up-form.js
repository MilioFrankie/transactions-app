import React, { useState } from 'react'
import { FormStyles as Styled } from '../form-styles'
import { useAuth } from '../../../context/auth-context'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const intialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function SignUpForm ({ history }) {
  const [signUpDetails, setSignUpDetails] = useState(intialState)
  const [validPassword, setValidPassword] = useState(true)
  const { setUser } = useAuth()

  const handleChange = ({ target: { name, value } }) => {
    setSignUpDetails(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validatePassword()) {
      setUser((prevState) => ({ ...prevState, authenticated: true }))
      history.push('/')
    }
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
        id='firstName'
        name='firstName'
        onChange={handleChange}
        placeholder='John'
        required
        type='text'
        value={signUpDetails.firstName}
      />
      <label htmlFor='lastName'>Last Name</label>
      <Styled.Input
        id='lastName'
        name='lastName'
        onChange={handleChange}
        placeholder='Doe'
        required
        type='text'
        value={signUpDetails.lastName}
      />
      <label htmlFor='dateOfBirth'>Date of Birth</label>
      <Styled.Input id='dateOfBirth' name='dateOfBirth' onChange={handleChange} required type='date' value={signUpDetails.dateOfBirth} />
      <label htmlFor='email'>Email</label>
      <Styled.Input
        id='email'
        name='email'
        onChange={handleChange}
        placeholder='john@example.com'
        required
        type='email'
        value={signUpDetails.email}
      />
      <label htmlFor='password'>Password</label>
      <Styled.Input
        id='password'
        name='password'
        onChange={handleChange}
        placeholder='your password'
        required
        type='password'
        value={signUpDetails.password}
      />
      <label htmlFor='confirmPassword'>Confirm Password</label>
      <Styled.Input
        id='confirmPassword'
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

export const SignUpFormWithRouter = withRouter(SignUpForm)

SignUpForm.propTypes = {
  history: PropTypes.any
}
