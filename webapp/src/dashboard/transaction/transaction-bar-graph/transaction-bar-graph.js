import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import { useQuery } from '@apollo/react-hooks'
import { LargeLoader } from '../../../components/loaders/large-loader'
import { GET_TRANSACTIONS_FOR_CHART } from '../../../graphql/queries'

export function TransactionBarGraph () {
  const [values, setValues] = useState([])
  const { data, loading, error } = useQuery(GET_TRANSACTIONS_FOR_CHART)

  useEffect(() => {
    if (data) {
      let arr = []
      data.transactions.forEach(transaction => arr.push([new Date(transaction.insertedAt), transaction.amount / 100]))
      setValues(arr)
    }
  }, [data])

  if (loading) return <LargeLoader loading={loading} />
  if (error) return `Error: ${error}`

  return (
    <div style={{ padding: '21px' }}>
      <h1>Amount Spent Per Day</h1>
      <Chart
        chartType='Bar'
        data={[['date', 'amount'], ...values]}
        height={'500px'}
        loader={<LargeLoader loading />}
        options={{
          chart: {
            subtitle: 'In Dollar Amount.'
          },
          colors: ['#169f6d']
        }}
        width={'500px'}
      />
    </div>
  )
}
