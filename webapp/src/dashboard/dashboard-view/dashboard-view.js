import React from 'react'
import { NewTransaction } from '../transaction/new-transaction'
import { ListTransactions } from '../transaction/list-transactions'
import { UpdateTransaction } from '../transaction/update-transaction'

export function DashboardView () {
  return (
    <div style={{ display: 'flex' }}>
      <NewTransaction />
      <UpdateTransaction id={'9e81f566-525f-4f54-8ce8-eea642c9d6ee'} />
      <ListTransactions />
    </div>
  )
}
