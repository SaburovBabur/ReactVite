import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/**
 * ========================
 * React app Initialization
 * ========================
 */
// SELECT
const app = document.querySelector('#root')

// React init
const root = ReactDOM.createRoot(app)

// innerHTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
