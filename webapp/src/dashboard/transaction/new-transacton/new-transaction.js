import React from 'react'
import { TransactionForm } from '../../../components/forms/transaction-form'
import styled from '@emotion/styled'

export function NewTransaction () {
  return (
    <FormContainer>
      <h1>New Transaction</h1>
      <TransactionForm />
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px;
`
