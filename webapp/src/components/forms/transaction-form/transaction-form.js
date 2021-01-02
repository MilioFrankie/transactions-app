import React, { useState } from 'react'
import { FormStyles as Styled } from '../form-styles'

const intialState = {
  transactionDate: '',
  merchant: '',
  amount: 0,
  description: '',
  credit: false,
  debit: false
}

export function TransactionForm () {
  const [transaction, setTransaction] = useState(intialState)

  const handleChange = ({ target: { name, value } }) => {
    if (value === 'credit') {
      setTransaction(prevState => ({ ...prevState, credit: true, debit: false }))
    } else if (value === 'debit') {
      setTransaction(prevState => ({ ...prevState, credit: false, debit: true }))
    } else {
      setTransaction(prevState => ({ ...prevState, [name]: value }))
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    window.alert(JSON.stringify(transaction))
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <label htmlFor='transactionDate'>Date of Transaction</label>
      <Styled.Input
        name='transactionDate'
        onChange={handleChange}
        required
        type='date'
        value={transaction.transactionDate}
      />
      <label htmlFor='merchant'>Merchant</label>
      <Styled.Input
        name='merchant'
        onChange={handleChange}
        placeholder='Costco'
        required
        type='text'
        value={transaction.merchant}
      />
      <label htmlFor='amount'>Amount</label>
      <Styled.Input
        min='0'
        name='amount'
        onChange={handleChange}
        placeholder='200'
        required
        type='number'
        value={transaction.amount}
      />
      <label htmlFor='description'>Description</label>
      <Styled.Input
        name='description'
        onChange={handleChange}
        placeholder='Grocery'
        required
        type='description'
        value={transaction.description}
      />
      <label htmlFor='cardType'>Card Type</label>
      <Styled.Select id='cardType' name='cardType' onBlur={handleChange} required>
        <option hidden value=''>
          Please select card type.
        </option>
        <option value='credit'>Credit</option>
        <option value='debit'>Debit</option>
      </Styled.Select>
      <Styled.SubmitButton>Submit</Styled.SubmitButton>
    </Styled.Form>
  )
}
