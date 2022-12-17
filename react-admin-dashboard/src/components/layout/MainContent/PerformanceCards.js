import React from 'react'

import Heading3 from 'components/atoms/Heading3'
import './PerformanceCards.scss'
import numberWithCommas from 'utils/number/numberWithCommas'

export default function PerformanceCards() {
  const cards = [
    { title: 'Views', value: 7482120, color: 'yellow' },
    { title: 'Follows', value: 54364, color: 'orange' },
    { title: 'Likes', value: 125685, color: 'sky' },
  ]

  return (
    <div className="performance">
      <Heading3>30 Days Performance</Heading3>
      <div className="cards">
        {cards.map((el) => (
          <div className="cards__item" key={el.title}>
            <p className="cards__title"> {el.title} </p>
            <p className="cards__value"> {numberWithCommas(el.value)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
