import gql from 'graphql-tag'

export const GET_ALL_TRANSACTIONS = gql`
  query {
    transactions {
      id
      userId
      merchantId
      amount
      description
      credit
      debit
      user {
        firstName
      }
      merchant {
        name
      }
    }
  }
`
export const GET_TRANSACTION = gql`
  query Transaction($id: ID!) {
    transaction(id: $id) {
      amount
      description
      id
      credit
      debit
      userId
      merchantId
    }
  }
`
export const GET_TRANSACTIONS_FOR_CHART = gql`
  query {
    transactions {
      id
      insertedAt
      amount
    }
  }
`
