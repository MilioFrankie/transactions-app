import React from 'react'
import { TransactionForm } from '../../../components/forms/transaction-form'
import styled from '@emotion/styled'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_TRANSACTION } from '../../../graphql/mutations'
import { GET_ALL_TRANSACTIONS } from '../../../graphql/queries'

export function NewTransaction () {
  const [createTransaction] = useMutation(CREATE_TRANSACTION, {
    update (
      cache,
      {
        data: { createTransaction }
      }
    ) {
      const { transactions } = cache.readQuery({ query: GET_ALL_TRANSACTIONS })
      cache.writeQuery({
        query: GET_ALL_TRANSACTIONS,
        data: { transactions: transactions.concat([createTransaction]) }
      })
    }
  })

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
