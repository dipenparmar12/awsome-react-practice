import TopNav from 'components/TopNav/TopNav'
import SectionHero from 'components/SectionHero/SectionHero'
import SectionHeroSecondary from 'components/SectionHeroSecondary/SectionHeroSecondary'
import SectionServices from 'components/SectionServices/SectionServices'
import SectionProjects from 'components/SectionProjects/SectionProjects'

import './index.scss'
import SectionPartners from 'components/SectionPartners/SectionPartners'

function App() {
  return (
    <>
      <TopNav />
      <SectionHero />
      <SectionHeroSecondary />
      <SectionServices />
      <SectionProjects />
      <SectionPartners />
    </>
  )
}

export default App
