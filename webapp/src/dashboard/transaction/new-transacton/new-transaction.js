import React from 'react'
import { TransactionForm } from '../../../components/forms/transaction-form'
import styled from '@emotion/styled'
import { useMutation } from '@apollo/react-hooks'
import { CreateTransaction } from '../../../graphql/mutations'

export function NewTransaction () {
  const [createTransaction] = useMutation(CreateTransaction)
  return (
    <FormContainer>
      <h1>New Transaction</h1>
      <TransactionForm mutationFunction={createTransaction} />
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px;
`
