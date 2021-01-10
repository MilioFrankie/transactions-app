import React, { useState, useEffect } from 'react'
import { FormStyles as Styled } from '../form-styles'
import { useAuth } from '../../../context/auth-context'
import MerchantSelection from './merchant-selection'
import PropTypes from 'prop-types'

const initialState = {
  merchantId: '',
  amount: 0,
  description: '',
  credit: false,
  debit: false,
  userId: ''
}

export function TransactionForm ({ mutationFunction, data }) {
  const [transaction, setTransaction] = useState(initialState)
  const [cardType, setCardType] = useState('')
  const { user } = useAuth()

  useEffect(() => {
    if (data) {
      setTransaction({ ...data })
      data.credit ? setCardType('credit') : setCardType('debit')
    } else if (user) {
      const id = user.user.id
      setTransaction(prevState => ({ ...prevState, userId: id }))
    }
  }, [])

  const handleChange = ({ target: { name, value } }) => {
    if (value === 'credit') {
      setTransaction(prevState => ({ ...prevState, credit: true, debit: false }))
      setCardType('credit')
    } else if (value === 'debit') {
      setTransaction(prevState => ({ ...prevState, credit: false, debit: true }))
      setCardType('debit')
    } else {
      setTransaction(prevState => ({ ...prevState, [name]: value }))
    }
  }

  const generatePayload = obj => {
    // converts amount's dollar to cents, returns new obj.
    const inCents = obj.amount * 100
    const newObj = { ...obj, amount: inCents }
    return newObj
  }

  const handleSubmit = event => {
    event.preventDefault()
    mutationFunction({ variables: generatePayload(transaction) })
    setTransaction({ ...initialState })
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <MerchantSelection handleChange={handleChange} value={transaction.merchantId} />
      <label htmlFor='amount'>Amount</label>
      <Styled.Input
        id='amount'
        min='0'
        name='amount'
        onChange={handleChange}
        placeholder='200'
        required
        step='0.01'
        type='number'
        value={transaction.amount}
      />
      <label htmlFor='description'>Description</label>
      <Styled.Input
        id='description'
        name='description'
        onChange={handleChange}
        placeholder='Grocery'
        required
        type='description'
        value={transaction.description}
      />
      <label htmlFor='cardType'>Card Type</label>
      <Styled.Select id='cardType' name='cardType' onChange={handleChange} required value={cardType}>
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
