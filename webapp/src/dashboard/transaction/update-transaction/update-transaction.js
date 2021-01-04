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
        data: { transactions: transactions.concat([updateTransaction]) }
      })
    }
  })

  const { loading, error, data } = useQuery(GET_TRANSACTION, {
    variables: { id }
  })

  if (loading) return <p>...Loading</p>
  if (error) return `Error! ${error}`

  return (
    <FormContainer>
      <h1>Update Transaction</h1>
      <TransactionForm data={data} mutationFunction={updateTransaction} />
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
