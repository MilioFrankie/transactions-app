import React from 'react'
import { TransactionForm } from '../../../components/forms/transaction-form'
import styled from '@emotion/styled'
import { useMutation } from '@apollo/react-hooks'
import { CreateTransaction } from '../../../graphql/mutations'
import { FetchTransactions } from '../../../graphql/queries'

export function NewTransaction () {
  const [createTransaction] = useMutation(CreateTransaction, {
    update (
      cache,
      {
        data: { createTransaction }
      }
    ) {
      const { transactions } = cache.readQuery({ query: FetchTransactions })
      cache.writeQuery({
        query: FetchTransactions,
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
