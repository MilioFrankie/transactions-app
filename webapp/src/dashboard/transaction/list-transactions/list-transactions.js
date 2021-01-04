import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { TransactionsTable } from '../../../components/tables/transactions-table'
import { GET_ALL_TRANSACTIONS } from '../../../graphql/queries'
import { DELETE_TRANSACTION } from '../../../graphql/mutations'
import styled from '@emotion/styled'

export function ListTransactions () {
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION, {
    update (
      cache,
      {
        data: { deleteTransaction }
      }
    ) {
      const { transactions } = cache.readQuery({ query: GET_ALL_TRANSACTIONS })
      cache.writeQuery({
        query: GET_ALL_TRANSACTIONS,
        data: { transactions: transactions.filter(transaction => transaction.id !== deleteTransaction.id) }
      })
    }
  })
  const { loading, error, data } = useQuery(GET_ALL_TRANSACTIONS)

  if (loading) return <p>Loading...</p>
  if (error) return `Error ${error.message}`

  return (
    <TransactionContainer>
      <h1>Transactions</h1>
      <TransactionsTable data={data} deleteMutation={deleteTransaction} />
    </TransactionContainer>
  )
}

const TransactionContainer = styled.div`
  padding: 21px;
`
