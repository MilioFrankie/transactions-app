import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
import { useQuery } from '@apollo/react-hooks'
import { LargeLoader } from '../../../components/loaders/large-loader'
import { GET_TRANSACTIONS_FOR_CHART } from '../../../graphql/queries'

export function TransactionChart () {
  const [values, setValues] = useState([])
  const { data, loading, error } = useQuery(GET_TRANSACTIONS_FOR_CHART)

  useEffect(() => {
    if (data) {
      setValues(formatTransactionForChart(data.transactions))
    }
  }, [data])

  const formatTransactionForChart = arr => {
    let formatedData = []
    arr.forEach(transaction => formatedData.push([new Date(transaction.insertedAt), transaction.amount / 100]))
    return formatedData
  }

  if (loading) return <LargeLoader loading={loading} />
  if (error) return `Error: ${error}`

  return (
    <div style={{ padding: '21px' }}>
      <h1>Amount Spent Per Day</h1>
      <Chart
        chartType='Line'
        data={[['date', 'amount'], ...values]}
        height={'500px'}
        loader={<LargeLoader loading />}
        options={{
          chart: {
            title: 'Last 30 days',
            subtitle: 'In Dollar Amount.'
          },
          colors: ['#169f6d']
        }}
        width={550}
      />
    </div>
  )
}
