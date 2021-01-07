import React from 'react'
import PropTypes from 'prop-types'
import { TransactionTableStyles as Styled } from './transactions-table-styles'

export function TransactionsTable ({ data, deleteMutation, openUpdateTransForm, setId }) {
  const headers = ['User', 'Merchant', 'Amount', 'description', 'credit', 'debit', 'update', 'delete']

  const handleUpdateButton = id => {
    openUpdateTransForm(prevState => !prevState)
    setId(id)
  }

  const handleDeleteButton = id => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      deleteMutation({ variables: { id: id } })
    }
  }

  return (
    <Styled.Table>
      <thead>
        <tr>
          {headers.map((name, index) => (
            <Styled.TD key={index}>{name.toUpperCase()}</Styled.TD>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.transactions.map(transaction => (
          <Styled.TR key={transaction.id}>
            <Styled.TD>{transaction.user.firstName}</Styled.TD>
            <Styled.TD>{transaction.merchant.name}</Styled.TD>
            <Styled.TD>${transaction.amount / 100}</Styled.TD>
            <Styled.TD>{transaction.description}</Styled.TD>
            <Styled.TD center>{transaction.credit && <Styled.CheckMark>&#10004;</Styled.CheckMark>}</Styled.TD>
            <Styled.TD center>{transaction.debit && <Styled.CheckMark>&#10004;</Styled.CheckMark>}</Styled.TD>
            <Styled.TD>
              <Styled.PlainButton onClick={() => handleUpdateButton(transaction.id)}>Update</Styled.PlainButton>
            </Styled.TD>
            <Styled.TD>
              <Styled.PlainButton danger onClick={() => handleDeleteButton(transaction.id)}>
                Delete
              </Styled.PlainButton>
            </Styled.TD>
          </Styled.TR>
        ))}
      </tbody>
    </Styled.Table>
  )
}

TransactionsTable.propTypes = {
  data: PropTypes.object.isRequired,
  deleteMutation: PropTypes.func.isRequired,
  openUpdateTransForm: PropTypes.func.isRequired,
  setId: PropTypes.func.isRequired
}
