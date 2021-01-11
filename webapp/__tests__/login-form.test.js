import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { LoginForm } from '../src/components/forms/login-form'
import { BrowserRouter as Router } from 'react-router-dom'

afterEach(cleanup)

describe('LoginForm', () => {
  const setup = () => {
    const utils = render(<Router><LoginForm /></Router>)
    const emailInput = utils.getByLabelText('Email')
    const passwordInput = utils.getByLabelText('Password')
    return {
      emailInput,
      passwordInput,
      ...utils
    }
  }

  it('should change input value to be example@example.com', () => {
    const { emailInput } = setup()
    expect(emailInput.value).toBe('')
    fireEvent.change(emailInput, { target: { value: 'example@example.com' } })
    expect(emailInput.value).toBe('example@example.com')
  })

  it('should change input value to be 123password', () => {
    const { passwordInput } = setup()
    expect(passwordInput.value).toBe('')
    fireEvent.change(passwordInput, { target: { value: '123password' } })
    expect(passwordInput.value).toBe('123password')
  })
})
