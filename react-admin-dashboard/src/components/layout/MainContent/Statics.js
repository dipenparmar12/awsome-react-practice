import Heading3 from 'components/atoms/Heading3'
import React from 'react'

import './Statics.scss'

export default function Statics() {
  return (
    <div className="statics_container">
      <Heading3> Statics </Heading3>

      <div className="statics_cards_container">
        <div className="statics_card">
          <div className="statics_card__content">
            <h4 className="statics_card__heading"> Weekly Target </h4>
            <p className="statics_card__sub_heading"> 25% archived </p>
          </div>
          <div className="statics_card__progress">25% </div>
        </div>
      </div>
    </div>
  )
}
