import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatComponent from './ChatComponent'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ChatComponent />
  </React.StrictMode>
)
