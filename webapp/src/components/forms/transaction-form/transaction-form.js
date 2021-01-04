import React, { useState, useEffect } from 'react'
import { FormStyles as Styled } from '../form-styles'
import PropTypes from 'prop-types'

const initialState = {
  // transactionDate: '',
  merchantId: 'e554eaf1-1eb9-477d-9836-904114852eee',
  amount: 0,
  description: '',
  credit: false,
  debit: false,
  userId: '5d478bc5-5602-4fee-9563-fc9135a3369e'
}

export function TransactionForm ({ mutationFunction, data }) {
  const [transaction, setTransaction] = useState(initialState)

  useEffect(() => {
    if (data) {
      setTransaction(prevState => ({
        ...prevState,
        merchantId: data.transaction.merchantId,
        amount: data.transaction.amount,
        description: data.transaction.description,
        credit: data.transaction.credit,
        debit: data.transaction.debit,
        userId: data.transaction.userId,
        id: data.transaction.id
      }))
    }
  }, [])

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
    mutationFunction({ variables: transaction })
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
      <Styled.SubmitButton>{data ? 'Update' : 'Submit'}</Styled.SubmitButton>
    </Styled.Form>
  )
}

TransactionForm.propTypes = {
  mutationFunction: PropTypes.func.isRequired,
  data: PropTypes.object
}
