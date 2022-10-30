import React from 'react'
import Analytics from './Analytics'

import AvatarList from './AvatarList'
import './mainContent.scss'
import PerformanceCards from './PerformanceCards'
import Statics from './Statics'

export default function MainContent() {
  return (
    <main>
      <AvatarList />

      <PerformanceCards />

      <Analytics />

      <Statics />
    </main>
  )
}
