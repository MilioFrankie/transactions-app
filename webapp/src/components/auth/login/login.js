import React from 'react'
import { LoginForm } from '../../forms/login-form'
import { FormStyles as Styled } from '../../forms/form-styles'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_USER } from '../../../graphql/queries'
import { LargeLoader } from '../../loaders/large-loader/large-loader'

export function Login () {
  // Temporary data for fake auth user
  const { data, loading, error } = useQuery(GET_USER, { variables: { firstName: 'Admin Tony' } })

  if (loading) return <LargeLoader loading />
  if (error) return `Error: ${error}`
  return (
    <Styled.FormContainer>
      <Styled.FormTitle>Login</Styled.FormTitle>
      <LoginForm user={data.user} />
      <Link to='/sign-up'>Don&#39;t have an account? Sign Up</Link>
    </Styled.FormContainer>
  )
}
