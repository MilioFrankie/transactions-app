import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { TransactionsTable } from '../src/components/tables/transactions-table'

afterEach(cleanup)

const mockData = {
  data: {
    transactions: [
      {
        id: 1,
        amount: 25000,
        description: 'jfeojsfioe',
        merchant: {
          id: '29176a40-23ed-4df4-bf01-2617682c35f6',
          name: 'Amazon'
        },
        user: {
          firstName: 'Admin Tony'
        }
      },
      {
        id: 2,
        amount: 48661,
        description: 'Ladder',
        merchant: {
          id: '32198f73-80e9-4ed9-bbb2-171c66276d70',
          name: 'The Home Depot'
        },
        user: {
          firstName: 'Thanos'
        }
      }
    ]
  }
}
const deletMutation = jest.fn()
const openUpdateTransForm = jest.fn()
const setId = jest.fn()

describe('TransactionTable', () => {
  it('should render with three rows (Header, transaction, transacton)', () => {
    const utils = render(
      <TransactionsTable
        data={mockData.data}
        deleteMutation={deletMutation}
        openUpdateTransForm={openUpdateTransForm}
        setId={setId}
      />
    )
    const tableRow = utils.getAllByRole('row')
    expect(tableRow.length).toBe(3)
  })
})
