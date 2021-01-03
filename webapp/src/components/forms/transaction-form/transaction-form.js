import React, { useState } from 'react'
import { FormStyles as Styled } from '../form-styles'
import PropTypes from 'prop-types'

const intialState = {
  // transactionDate: '',
  merchantId: '0687bca4-40c5-4627-ad7a-fc9224657410',
  amount: 0,
  description: '',
  credit: false,
  debit: false,
  userId: '163f1ad5-9ec0-4dcc-abe4-0dcb09a3d9a8'
}

export function TransactionForm ({ mutationFunction }) {
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

  const toInteger = () => {
    const amount = parseInt(transaction.amount)
    setTransaction(prevState => ({ ...prevState, amount: amount }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    mutationFunction({ variables: transaction })
    window.alert(JSON.stringify(transaction))
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      {/* <label htmlFor='transactionDate'>Date of Transaction</label>
      <Styled.Input
        name='transactionDate'
        onChange={handleChange}
        required
        type='date'
        value={transaction.transactionDate}
      /> */}
      <label htmlFor='merchantId'>Merchant</label>
      <Styled.Input
        name='merchantId'
        onChange={handleChange}
        placeholder='Costco'
        required
        type='text'
        value={transaction.merchantId}
      />
      <label htmlFor='amount'>Amount</label>
      <Styled.Input
        min='0'
        name='amount'
        onBlur={toInteger}
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

TransactionForm.propTypes = {
  mutationFunction: PropTypes.func
}
