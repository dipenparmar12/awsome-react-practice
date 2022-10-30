import React from 'react'

import './ProgressCircle.scss'

export default function ProgressCircle({ progress, children }) {
  return (
    <div className="progress_container">
      <div className="progress-circle over50 p83">
        {/* <span>25%</span> */}
        <div className="left-half-clipper">
          <div className="first50-bar" />
          <div className="value-bar" />
        </div>
      </div>
      <span className="progress_value"> 25% </span>
    </div>
  )
}

// <div className="pie-wrapper progress-25 ">
//   <div className="pie">
//     <div className="left-side half-circle" />
//     {/* <div className="right-side half-circle" /> */}
//   </div>
//   <div className="shadow" />
// </div>
