import React from 'react'
import PropTypes from 'prop-types'
import { TransactionTableStyles as Styled } from './transactions-table-styles'

export function TransactionsTable ({ data, deleteMutation }) {
  const headers = ['User', 'Merchant', 'Amount', 'description', 'credit', 'debit', 'update', 'delete']

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
            <Styled.TD>${transaction.amount}</Styled.TD>
            <Styled.TD>{transaction.description}</Styled.TD>
            <Styled.TD center>{transaction.credit && <Styled.CheckMark>&#10004;</Styled.CheckMark>}</Styled.TD>
            <Styled.TD center>{transaction.debit && <Styled.CheckMark>&#10004;</Styled.CheckMark>}</Styled.TD>
            <Styled.TD><button onClick={() => window.alert(transaction.id)}>Update</button></Styled.TD>
            <Styled.TD><button onClick={() => deleteMutation({ variables: { id: transaction.id } })}>Delete</button></Styled.TD>
          </Styled.TR>
        ))}
      </tbody>
    </Styled.Table>
  )
}

TransactionsTable.propTypes = {
  data: PropTypes.object.isRequired,
  deleteMutation: PropTypes.func.isRequired
}
