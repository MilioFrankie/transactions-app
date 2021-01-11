import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { TransactionForm } from '../src/components/forms/transaction-form'
import { MockedProvider } from '@apollo/react-testing'
import { GET_MERCHANTS } from '../src/graphql/queries'

afterEach(cleanup)

const mocks = [
  {
    request: {
      query: GET_MERCHANTS
    },
    result: {
      data: {
        merchants: { id: '1', name: 'costco' }
      }
    }
  }
]
const mockData = {
  amount: 25,
  credit: true,
  debit: false,
  description: 'Lots of stuff'
}
const mutationFunction = jest.fn()

describe('TransactionForm', () => {
  const setup = () => {
    const utils = render(
      <MockedProvider mocks={mocks}>
        <TransactionForm mutationFunction={mutationFunction} />
      </MockedProvider>
    )

    const amountInput = utils.getByLabelText('Amount')
    const descriptionInput = utils.getByLabelText('Description')
    const cardType = utils.getByLabelText('Card Type')

    return {
      amountInput,
      descriptionInput,
      cardType,
      ...utils
    }
  }

  it('should change input value to be 25', () => {
    const { amountInput } = setup()
    expect(amountInput.value).toBe('0')
    fireEvent.change(amountInput, { target: { value: '25' } })
    expect(amountInput.value).toBe('25')
  })

  it('should change input value to be "Lots of stuff"', () => {
    const { descriptionInput } = setup()
    expect(descriptionInput.value).toBe('')
    fireEvent.change(descriptionInput, { target: { value: 'Lots of stuff' } })
    expect(descriptionInput.value).toBe('Lots of stuff')
  })

  it('should change input value to be "debit"', () => {
    const { cardType } = setup()
    expect(cardType.value).toBe('')
    fireEvent.change(cardType, { target: { value: 'debit' } })
    expect(cardType.value).toBe('debit')
  })
})

describe('TransactionForm with data', () => {
  const setup = () => {
    const utils = render(
      <MockedProvider mocks={mocks}>
        <TransactionForm data={mockData} mutationFunction={mutationFunction} />
      </MockedProvider>
    )

    const amountInput = utils.getByLabelText('Amount')
    const descriptionInput = utils.getByLabelText('Description')
    const cardType = utils.getByLabelText('Card Type')

    return {
      amountInput,
      descriptionInput,
      cardType,
      ...utils
    }
  }

  it('should change input value to be 45 from 25', () => {
    const { amountInput } = setup()
    expect(amountInput.value).toBe('25')
    fireEvent.change(amountInput, { target: { value: '45' } })
    expect(amountInput.value).toBe('45')
  })

  it('should change input value to be "Lots of expensive stuff" from "Lots of stuff"', () => {
    const { descriptionInput } = setup()
    expect(descriptionInput.value).toBe('Lots of stuff')
    fireEvent.change(descriptionInput, { target: { value: 'Lots of expensive stuff' } })
    expect(descriptionInput.value).toBe('Lots of expensive stuff')
  })

  it('should change input value to be "credit" from "debit"', () => {
    const { cardType } = setup()
    expect(cardType.value).toBe('credit')
    fireEvent.change(cardType, { target: { value: 'debit' } })
    expect(cardType.value).toBe('debit')
  })
})
