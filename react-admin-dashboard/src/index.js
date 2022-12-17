import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.scss'

// Create a API client
const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
