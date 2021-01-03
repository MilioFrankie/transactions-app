import React from 'react'
import { NewTransaction } from '../transaction/new-transaction'
import { ListTransactions } from '../transaction/list-transactions'

export function DashboardView () {
  return (
    <div>
      <NewTransaction />
      <ListTransactions />
    </div>
  )
}
