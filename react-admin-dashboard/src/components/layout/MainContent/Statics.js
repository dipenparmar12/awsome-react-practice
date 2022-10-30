import React from 'react'
import Heading3 from 'components/atoms/Heading3'
import Heading4 from 'components/atoms/Heading4'

import './Statics.scss'

export default function Statics() {
  return (
    <div className="statics_container">
      <Heading3> Statics </Heading3>

      <div className="statics_cards_container">
        <div className="statics_card">
          <div className="statics_card__content">
            <Heading3 className="statics_card__heading">Weekly Target</Heading3>
            <Heading4> 25% archived </Heading4>
          </div>

          <div className="statics_card__progress"> 25% </div>
        </div>
      </div>
    </div>
  )
}
