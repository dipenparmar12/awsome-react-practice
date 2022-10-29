/* eslint-disable prettier/prettier */

import AsideLeft from './components/layout/AsideLeft'
import AsideRight from './components/layout/AsideRight'
import MainContent from './components/layout/MainContent'
import './styles/main.scss'

function App() {
  return (
    <div className="main_container ">
      <AsideLeft />
      <MainContent />
      <AsideRight />
    </div>
  )
}

export default App
