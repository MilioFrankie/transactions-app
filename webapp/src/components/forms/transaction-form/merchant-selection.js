import React from 'react'
import { Select } from '../form-styles'
import { useQuery } from '@apollo/react-hooks'
import { GET_MERCHANTS } from '../../../graphql/queries'
import PropTypes from 'prop-types'

export default function MerchantSelection ({ handleChange, value }) {
  const { data, loading, error } = useQuery(GET_MERCHANTS)
  if (loading) return 'Loading...'
  if (error) return `Error: ${error}`

  return (
    <>
      <label htmlFor='merchants'>Merchant</label>
      <Select id='merchants' name='merchantId' onChange={handleChange} required value={value}>
        <option hidden value=''>
          Please select a merchant.
        </option>
        {data.merchants.map(merchant => (
          <option key={merchant.id} value={merchant.id}>
            {merchant.name}
          </option>
        ))}
      </Select>
    </>
  )
}

MerchantSelection.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string
}
