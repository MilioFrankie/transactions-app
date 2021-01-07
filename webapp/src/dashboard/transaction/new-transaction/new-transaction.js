import React from 'react'
import { TransactionForm } from '../../../components/forms/transaction-form'
import { TransactionStyles as Styled } from '../transaction-styles'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_TRANSACTION } from '../../../graphql/mutations'
import { GET_ALL_TRANSACTIONS, GET_TRANSACTIONS_FOR_HISTOGRAM } from '../../../graphql/queries'
import { useToasts } from 'react-toast-notifications'
import PropTypes from 'prop-types'

export function NewTransaction ({ open, openNewTransactionForm }) {
  const { addToast } = useToasts()
  const [createTransaction] = useMutation(CREATE_TRANSACTION, {
    refetchQueries: [{ query: GET_ALL_TRANSACTIONS }, { query: GET_TRANSACTIONS_FOR_HISTOGRAM }],
    onCompleted: () => {
      addToast('Your transaction was added.', { appearance: 'success' })
      openNewTransactionForm(prevState => !prevState)
    },
    onError: () => {
      addToast('Oops Something went wrong', { appearance: 'error' })
      openNewTransactionForm(prevState => !prevState)
    }
  })

  return (
    <Styled.SlideInContainer open={open}>
      <Styled.XButton onClick={() => openNewTransactionForm(prevState => !prevState)}>&times;</Styled.XButton>
      <Styled.FormContainer>
        <h1>New Transaction</h1>
        <TransactionForm mutationFunction={createTransaction} />
      </Styled.FormContainer>
    </Styled.SlideInContainer>
  )
}

NewTransaction.propTypes = {
  open: PropTypes.bool,
  openNewTransactionForm: PropTypes.func
}
