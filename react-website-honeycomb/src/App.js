import TopNav from 'components/TopNav/TopNav'
import SectionHero from 'components/SectionHero/SectionHero'
import SectionHeroSecondary from 'components/SectionHeroSecondary/SectionHeroSecondary'
import SectionServices from 'components/SectionServices/SectionServices'
import SectionProjects from 'components/SectionProjects/SectionProjects'
import SectionPartners from 'components/SectionPartners/SectionPartners'
import SectionTeams from 'components/SectionTeams/SectionTeams'

import './index.scss'

function App() {
  return (
    <>
      <TopNav />
      <SectionHero />
      <SectionHeroSecondary />
      <SectionServices />
      <SectionProjects />
      <SectionPartners />
      <SectionTeams />
      <div className="pb-96" />
    </>
  )
}

export default App
