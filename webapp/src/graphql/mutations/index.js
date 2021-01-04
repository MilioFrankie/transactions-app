import gql from 'graphql-tag'

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction(
    $amount: Int!
    $credit: Boolean!
    $debit: Boolean!
    $description: String!
    $merchantId: ID!
    $userId: ID!
  ) {
    createTransaction(
      amount: $amount
      credit: $credit
      debit: $debit
      description: $description
      merchantId: $merchantId
      userId: $userId
    ) {
      id
      description
      credit
      debit
      amount
      merchantId
      userId
    }
  }
`
export const DELETE_TRANSACTION = gql`
  mutation DeleteTransaction($id: ID!){
    deleteTransaction(id: $id){
      amount
      credit
      debit
      description
      id
      userId
      merchantId
    }
  }
`
export const UPDATE_TRANSACTION = gql`
  mutation UpdateTransaction(
    $id: ID!
    $amount: Int!
    $credit: Boolean!
    $debit: Boolean!
    $description: String!
    $merchantId: ID!
    $userId: ID!
  ){
    updateTransaction(
      id: $id
      amount: $amount
      credit: $credit
      debit: $debit
      description: $description
      merchantId: $merchantId
      userId: $userId
    ) {
      id
      description
      credit
      debit
      amount
      merchantId
      userId
    }
  }
`
