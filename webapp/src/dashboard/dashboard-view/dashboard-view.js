import React, { useState } from 'react'
import { NewTransaction } from '../transaction/new-transaction'
import { ListTransactions } from '../transaction/list-transactions'
import { UpdateTransaction } from '../transaction/update-transaction'

export function DashboardView () {
  const [newTransactionOpen, setNewTransactionOpen] = useState(false)
  const [updateTransOpen, setUpdateTransOpen] = useState(false)
  const [id, setId] = useState('')

  return (
    <div style={{ display: 'flex' }}>
      <NewTransaction open={newTransactionOpen} openNewTransactionForm={setNewTransactionOpen} />
      {id !== '' && <UpdateTransaction id={id} open={updateTransOpen} openUpdateTransForm={setUpdateTransOpen} />}
      <ListTransactions
        openNewTransactionForm={setNewTransactionOpen}
        openUpdateTransForm={setUpdateTransOpen}
        setId={setId}
      />
    </div>
  )
}
