import React from 'react'
import '../base/config.css'
import './animations/rotatingBox.css'
import './animations/pulse.css'
import Bounce from "./animations/bounce/Bounce";
import Chase from "./animations/chase/Chase";

import Tabs from '../reactive/tab/Tabs';


const Animations = () => {

  return (
      <>
        <div className="tabContainer morpichh" style={{width: '100%', minHeight: '300px', margin:'0 auth'}}>
          <Tabs active={'chase'}>
            <Tabs.Tab tabName={'chase'}>
              <Chase/>
            </Tabs.Tab>

            <Tabs.Tab tabName={'pulse'}>
              <div className='pulse'/>
            </Tabs.Tab>

            <Tabs.Tab tabName={'rotating_box'}>
              <div className="rotating_box"/>
            </Tabs.Tab>

            <Tabs.Tab tabName={'Bounce'}>
              <Bounce/>
            </Tabs.Tab>

            <Tabs.Tab tabName={'spinner'}>
              <div className="spinner"/>
            </Tabs.Tab>

          </Tabs>
        </div>
      </>
  )
}

export default Animations

// Ref: https://tobiasahlin.com/spinkit/
