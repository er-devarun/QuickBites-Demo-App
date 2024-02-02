import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import quickBitesStore from './redux_store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={quickBitesStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
