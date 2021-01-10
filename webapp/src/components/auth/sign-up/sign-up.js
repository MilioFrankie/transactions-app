import React from 'react'
import { SignUpForm } from '../../forms/sign-up-form'
import { FormStyles as Styled } from '../../forms/form-styles'
import { useQuery } from '@apollo/react-hooks'
import { GET_USER } from '../../../graphql/queries'
import { LargeLoader } from '../../loaders/large-loader/large-loader'
import { Link } from 'react-router-dom'

export function SignUp () {
  // Temporary data for fake auth user
  const { data, loading, error } = useQuery(GET_USER, { variables: { firstName: 'Admin Tony' } })

  if (loading) return <LargeLoader loading />
  if (error) return `Error: ${error}`
  return (
    <Styled.FormContainer>
      <Styled.FormTitle>Sign Up</Styled.FormTitle>
      <SignUpForm user={data.user} />
      <Link to='/login'>Already have an account? Login</Link>
    </Styled.FormContainer>
  )
}
