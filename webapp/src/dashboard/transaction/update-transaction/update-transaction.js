import React from 'react'
import { TransactionForm } from '../../../components/forms/transaction-form'
import styled from '@emotion/styled'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { UPDATE_TRANSACTION } from '../../../graphql/mutations'
import { GET_ALL_TRANSACTIONS, GET_TRANSACTION } from '../../../graphql/queries'
import PropTypes from 'prop-types'

export function UpdateTransaction ({ id }) {
  const [updateTransaction] = useMutation(UPDATE_TRANSACTION, {
    update (
      cache,
      {
        data: { updateTransaction }
      }
    ) {
      const { transactions } = cache.readQuery({ query: GET_ALL_TRANSACTIONS })
      cache.writeQuery({
        query: GET_ALL_TRANSACTIONS,
        data: {
          transactions: transactions.map(transaction =>
            transaction.id === updateTransaction.id ? updateTransaction : transaction
          )
        }
      })
    }
  })

  const { loading, error, data } = useQuery(GET_TRANSACTION, {
    variables: { id }
  })

  if (loading) return <p>...Loading</p>
  if (error) return `Error! ${error}`

  const modifyPayload = obj => {
    const newObj = {}
    for (let key in obj) {
      key === 'amount' ? (newObj[key] = obj[key] / 100) : (newObj[key] = obj[key])
    }
    return newObj
  }

  return (
    <FormContainer>
      <h1>Update Transaction</h1>
      <TransactionForm data={modifyPayload(data.transaction)} mutationFunction={updateTransaction} />
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px;
`
UpdateTransaction.propTypes = {
  id: PropTypes.any
}
