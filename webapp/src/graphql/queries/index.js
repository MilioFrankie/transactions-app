import gql from 'graphql-tag'

export const FetchTransactions = gql`
  query {
    transactions{
      id
      userId
      merchantId
      amount
      description
      credit
      debit
    }
  }
`
