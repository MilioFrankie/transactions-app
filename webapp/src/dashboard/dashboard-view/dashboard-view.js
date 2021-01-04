import React from 'react'
import { NewTransaction } from '../transaction/new-transaction'
import { ListTransactions } from '../transaction/list-transactions'
import { UpdateTransaction } from '../transaction/update-transaction'

export function DashboardView () {
  return (
    <div style={{ display: 'flex' }}>
      <NewTransaction />
      <UpdateTransaction id={'4c5f96ca-a736-4d55-86fe-df40e13a7c51'} />
      <ListTransactions />
    </div>
  )
}
