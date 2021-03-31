import React from 'react'
import { HashRouter } from 'react-router-dom'
import './App.css'
import SwitchApp from './routes/SwitchApp'

function App() {
  return (
    <HashRouter>
      <SwitchApp />
    </HashRouter>
  )
}

export default App
