import React, { useState } from 'react'
import { NewTransaction } from '../transaction/new-transaction'
import { ListTransactions } from '../transaction/list-transactions'
import { UpdateTransaction } from '../transaction/update-transaction'
import { TransactionChart } from '../transaction/transaction-chart'
import { DashboardViewStyles as Styled } from './dashboard-view-styles'

export function DashboardView () {
  const [newTransactionOpen, setNewTransactionOpen] = useState(false)
  const [updateTransOpen, setUpdateTransOpen] = useState(false)
  const [id, setId] = useState('')

  return (
    <Styled.Container formOpen={newTransactionOpen || updateTransOpen}>
      {(id !== '' && updateTransOpen) ? <UpdateTransaction id={id} open={updateTransOpen} openUpdateTransForm={setUpdateTransOpen} /> : null}
      {newTransactionOpen && <NewTransaction open={newTransactionOpen} openNewTransactionForm={setNewTransactionOpen} /> }
      <Styled.ContentContainer>
        <ListTransactions
          openNewTransactionForm={setNewTransactionOpen}
          openUpdateTransForm={setUpdateTransOpen}
          setId={setId}
        />
        <TransactionChart />
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
