import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes'
import { ApolloProvider } from '@apollo/react-hooks'
import { ToastProvider } from 'react-toast-notifications'
import { AuthProvider } from './context/auth-context'
import { client } from './network/apollo-client'

ReactDOM.render(
  <div data-app-init=''>
    <ApolloProvider client={client}>
      <ToastProvider autoDismiss>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ToastProvider>
    </ApolloProvider>
  </div>,
  document.getElementById('react-app')
)
