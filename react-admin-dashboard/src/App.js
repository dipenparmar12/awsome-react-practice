import AsideRight from 'components/layout/AsideRight/AsideRight'
import MainContent from 'components/layout/MainContent/MainContent'
import AsideLeft from 'components/layout/sidebar/AsideLeft'

import './index.scss'
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
