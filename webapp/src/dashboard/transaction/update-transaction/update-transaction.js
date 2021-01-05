import React from 'react'
import { TransactionForm } from '../../../components/forms/transaction-form'
import { TransactionStyles as Styled } from '../transaction-styles'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { UPDATE_TRANSACTION } from '../../../graphql/mutations'
import { GET_ALL_TRANSACTIONS, GET_TRANSACTION } from '../../../graphql/queries'
import { SmallLoader } from '../../../components/loaders/small-loader'
import PropTypes from 'prop-types'

export function UpdateTransaction ({ id, open, openUpdateTransForm }) {
  const [updateTransaction] = useMutation(UPDATE_TRANSACTION, { refetchQueries: [{ query: GET_ALL_TRANSACTIONS }] })

  const { loading, error, data } = useQuery(GET_TRANSACTION, {
    variables: { id }
  })

  if (loading) return <SmallLoader loading={loading} />
  if (error) return `Error ${error.message}`

  const modifyPayload = obj => {
    const newObj = {}
    for (let key in obj) {
      key === 'amount' ? (newObj[key] = obj[key] / 100) : (newObj[key] = obj[key])
    }
    return newObj
  }

  return (
    <Styled.SlideInContainer open={open}>
      <Styled.XButton onClick={() => openUpdateTransForm(prevState => !prevState)}>&times;</Styled.XButton>
      <Styled.FormContainer>
        <h1>Update Transaction</h1>
        <TransactionForm data={modifyPayload(data.transaction)} mutationFunction={updateTransaction} />
      </Styled.FormContainer>
    </Styled.SlideInContainer>
  )
}

UpdateTransaction.propTypes = {
  id: PropTypes.any.isRequired,
  open: PropTypes.bool.isRequired,
  openUpdateTransForm: PropTypes.func.isRequired
}
