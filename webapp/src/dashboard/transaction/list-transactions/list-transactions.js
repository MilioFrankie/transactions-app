import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { TransactionsTable } from '../../../components/tables/transactions-table'
import { GET_ALL_TRANSACTIONS, GET_TRANSACTIONS_FOR_CHART } from '../../../graphql/queries'
import { DELETE_TRANSACTION } from '../../../graphql/mutations'
import { LargeLoader } from '../../../components/loaders/large-loader'
import { ListTransactionsStyles as Styled } from './list-transactions-styles'
import { useToasts } from 'react-toast-notifications'
import PropTypes from 'prop-types'

export function ListTransactions ({ openNewTransactionForm, openUpdateTransForm, setId }) {
  const { addToast } = useToasts()
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION, {
    refetchQueries: [{ query: GET_ALL_TRANSACTIONS }, { query: GET_TRANSACTIONS_FOR_CHART }],
    onCompleted: () => addToast('The transaction was deleted.', { appearance: 'success' }),
    onError: () => addToast('Oops Something went wrong', { appearance: 'error' })
  })

  const { loading, error, data } = useQuery(GET_ALL_TRANSACTIONS)

  if (loading) return <LargeLoader loading={loading} />
  if (error) return `Error ${error.message}`

  return (
    <Styled.TransactionContainer>
      <h1>Transactions</h1>
      <Styled.CreateButton onClick={() => openNewTransactionForm(prevState => !prevState)}>Add</Styled.CreateButton>
      <TransactionsTable
        data={data}
        deleteMutation={deleteTransaction}
        openUpdateTransForm={openUpdateTransForm}
        setId={setId}
      />
    </Styled.TransactionContainer>
  )
}

ListTransactions.propTypes = {
  openNewTransactionForm: PropTypes.func,
  openUpdateTransForm: PropTypes.func,
  setId: PropTypes.func
}
