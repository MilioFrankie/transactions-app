import React, { useState } from 'react'
import { NewTransaction } from '../transaction/new-transaction'
import { ListTransactions } from '../transaction/list-transactions'
import { UpdateTransaction } from '../transaction/update-transaction'
import { TransactionBarGraph } from '../transaction/transaction-bar-graph'
import styled from '@emotion/styled'

export function DashboardView () {
  const [newTransactionOpen, setNewTransactionOpen] = useState(false)
  const [updateTransOpen, setUpdateTransOpen] = useState(false)
  const [id, setId] = useState('')

  return (
    <DashboardContainer>
      <NewTransaction open={newTransactionOpen} openNewTransactionForm={setNewTransactionOpen} />
      {id !== '' && <UpdateTransaction id={id} open={updateTransOpen} openUpdateTransForm={setUpdateTransOpen} />}
      <ListTransactions
        openNewTransactionForm={setNewTransactionOpen}
        openUpdateTransForm={setUpdateTransOpen}
        setId={setId}
      />
      <TransactionBarGraph />
    </DashboardContainer>
  )
}

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
`
