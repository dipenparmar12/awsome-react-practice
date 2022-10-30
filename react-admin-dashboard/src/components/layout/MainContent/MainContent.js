import React from 'react'
import Analytics from './Analytics'

import AvatarList from './AvatarList'
import './mainContent.scss'
import PerformanceCards from './PerformanceCards'

export default function MainContent() {
  return (
    <main>
      <AvatarList />

      <PerformanceCards />

      <Analytics />
    </main>
  )
}
