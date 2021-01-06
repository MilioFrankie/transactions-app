import React from 'react'
import { TransactionForm } from '../../../components/forms/transaction-form'
import { TransactionStyles as Styled } from '../transaction-styles'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_TRANSACTION } from '../../../graphql/mutations'
import { GET_ALL_TRANSACTIONS, GET_TRANSACTIONS_FOR_HISTOGRAM } from '../../../graphql/queries'
import PropTypes from 'prop-types'

export function NewTransaction ({ open, openNewTransactionForm }) {
  const [createTransaction] = useMutation(CREATE_TRANSACTION, {
    refetchQueries: [{ query: GET_ALL_TRANSACTIONS }, { query: GET_TRANSACTIONS_FOR_HISTOGRAM }]
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
