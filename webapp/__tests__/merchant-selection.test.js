import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import MerchantSelecton from '../src/components/forms/transaction-form/merchant-selection'
import { MockedProvider } from '@apollo/react-testing'
import { GET_MERCHANTS } from '../src/graphql/queries'

afterEach(cleanup)

const mocks = {
  request: {
    query: GET_MERCHANTS
  },
  result: {
    data: {
      merchants: [{ id: '1', name: 'Costco' }, { id: '2', name: 'Walmart' }, { id: '3', name: 'Amazon' }]
    }
  }
}

describe('MerchantSelection', () => {
  it('renders without error', () => {
    render(
      <MockedProvider mocks={[mocks]}>
        <MerchantSelecton />
      </MockedProvider>
    )
  })

  //   it('should render merchant selections', async () => {
  //     render(
  //       <MockedProvider mocks={[mocks]}>
  //         <MerchantSelecton />
  //       </MockedProvider>
  //     )

  //     await new Promise(resolve => setTimeout(resolve, 0))
  //     const merchantSelection = screen.getByLabelText('Merchant')
  //     const merchantOptions = screen.getAllByRole('option')

  //     expect(merchantOptions.length).toBe(3)
  //     fireEvent.change(merchantSelection, { target: { value: '1' } })
  //     expect(merchantSelection.value).toBe('1')
  //   })
})
