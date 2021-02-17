import React from 'react'
import '../base/config.css'
import Bounce from "./animations/bounce/Bounce";
import Chase from "./animations/chase/Chase";
import './animations/rotatingBox.css'
import './animations/pulse.css'


const Animations = () => {
  return (
      <div className="container morpichh center">

        <div className="spinner"/>

        <Chase/>

        <div className='pulse'/>

        <div className="rotating_box"/>

        <Bounce/>
      </div>
  )
}

export default Animations

// Ref: https://tobiasahlin.com/spinkit/
