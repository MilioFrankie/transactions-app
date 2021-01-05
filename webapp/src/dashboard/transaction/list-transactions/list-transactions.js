import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { TransactionsTable } from '../../../components/tables/transactions-table'
import { GET_ALL_TRANSACTIONS } from '../../../graphql/queries'
import { DELETE_TRANSACTION } from '../../../graphql/mutations'
import { LargeLoader } from '../../../components/loaders/large-loader'
import styled from '@emotion/styled'

import PropTypes from 'prop-types'

export function ListTransactions ({ openNewTransactionForm, openUpdateTransForm, setId }) {
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

  if (loading) return <LargeLoader loading={loading} />
  if (error) return `Error ${error.message}`

  return (
    <TransactionContainer>
      <h1>Transactions</h1>
      <button onClick={() => openNewTransactionForm(prevState => !prevState)}>New Transaction</button>
      <TransactionsTable
        data={data}
        deleteMutation={deleteTransaction}
        openUpdateTransForm={openUpdateTransForm}
        setId={setId}
      />
    </TransactionContainer>
  )
}

ListTransactions.propTypes = {
  openNewTransactionForm: PropTypes.func,
  openUpdateTransForm: PropTypes.func,
  setId: PropTypes.func
}

const TransactionContainer = styled.div`
  padding: 21px;
`
