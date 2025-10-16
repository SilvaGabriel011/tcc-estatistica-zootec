import React from 'react'
import ReactDOM from 'react-dom/client'
import FilterComponent from './FilterComponent'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <FilterComponent />
  </React.StrictMode>
)
