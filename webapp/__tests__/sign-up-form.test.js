import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { SignUpForm } from '../src/components/forms/sign-up-form'
import { BrowserRouter as Router } from 'react-router-dom'

afterEach(cleanup)

describe('SignUpForm', () => {
  const setup = () => {
    const utils = render(
      <Router>
        <SignUpForm />
      </Router>
    )

    const firstNameInput = utils.getByLabelText('First Name')
    const lastNameInput = utils.getByLabelText('Last Name')
    const dobInput = utils.getByLabelText('Date of Birth')
    const emailInput = utils.getByLabelText('Email')
    const passwordInput = utils.getByLabelText('Password')
    const confirmPasswordInput = utils.getByLabelText('Confirm Password')
    return {
      firstNameInput,
      lastNameInput,
      dobInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
      ...utils
    }
  }

  it('should change input value to be Tony', () => {
    const { firstNameInput } = setup()
    expect(firstNameInput.value).toBe('')
    fireEvent.change(firstNameInput, { target: { value: 'Tony' } })
    expect(firstNameInput.value).toBe('Tony')
  })

  it('should change input value to be Stark', () => {
    const { lastNameInput } = setup()
    expect(lastNameInput.value).toBe('')
    fireEvent.change(lastNameInput, { target: { value: 'Stark' } })
    expect(lastNameInput.value).toBe('Stark')
  })

  it('should change input value to be yyyy-mm-dd', () => {
    const { dobInput } = setup()
    expect(dobInput.value).toBe('')
    fireEvent.change(dobInput, { target: { value: '1990-10-20' } })
    expect(dobInput.value).toBe('1990-10-20')
  })

  it('should change input value to be example@example.com', () => {
    const { emailInput } = setup()
    expect(emailInput.value).toBe('')
    fireEvent.change(emailInput, { target: { value: 'example@example.com' } })
    expect(emailInput.value).toBe('example@example.com')
  })

  it('should change input value to be password', () => {
    const { passwordInput } = setup()
    expect(passwordInput.value).toBe('')
    fireEvent.change(passwordInput, { target: { value: 'password' } })
    expect(passwordInput.value).toBe('password')
  })

  it('should change input value to be confirmed', () => {
    const { confirmPasswordInput } = setup()
    expect(confirmPasswordInput.value).toBe('')
    fireEvent.change(confirmPasswordInput, { target: { value: 'confirmed' } })
    expect(confirmPasswordInput.value).toBe('confirmed')
  })
})
