import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

import { ReactQueryDevtools } from 'react-query/devtools'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
