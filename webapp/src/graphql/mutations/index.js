import gql from 'graphql-tag'

export const CreateTransaction = gql`
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
