import React from 'react'
import '../base/config.css'
import Bounce from "./bounce/Bounce";
import RotatingBox from "./rotating_box/RotatingBox";
import Pulse from "./pulse/Pulse";
import Chase from "./chase/Chase";

const Animations = () => {
  return (
      <div className="container morpichh center">
        <Chase/>
        {/*<Pulse/>*/}
        {/*<Bounce/>*/}
        {/*<RotatingBox/>*/}
      </div>
  )
}

export default Animations

// Ref: https://tobiasahlin.com/spinkit/
