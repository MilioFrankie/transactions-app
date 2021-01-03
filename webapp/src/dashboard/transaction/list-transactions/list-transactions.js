import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { TransactionsTable } from '../../../components/tables/transactions-table'
import { FetchTransactions } from '../../../graphql/queries'
import styled from '@emotion/styled'

export function ListTransactions () {
  const { loading, error, data } = useQuery(FetchTransactions)

  if (loading) return <p>Loading...</p>
  if (error) return `Error ${error.message}`
  return (
    <TransactionContainer>
      <h1>Transactions</h1>
      <TransactionsTable data={data} />
    </TransactionContainer>
  )
}

const TransactionContainer = styled.div`
  padding: 21px;
`