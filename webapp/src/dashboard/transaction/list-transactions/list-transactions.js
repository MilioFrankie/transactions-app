import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { TransactionsTable } from '../../../components/tables/transactions-table'
import { GET_ALL_TRANSACTIONS, GET_TRANSACTIONS_FOR_HISTOGRAM } from '../../../graphql/queries'
import { DELETE_TRANSACTION } from '../../../graphql/mutations'
import { LargeLoader } from '../../../components/loaders/large-loader'
import styled from '@emotion/styled'

import PropTypes from 'prop-types'

export function ListTransactions ({ openNewTransactionForm, openUpdateTransForm, setId }) {
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION, {
    refetchQueries: [{ query: GET_ALL_TRANSACTIONS }, { query: GET_TRANSACTIONS_FOR_HISTOGRAM }]
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
