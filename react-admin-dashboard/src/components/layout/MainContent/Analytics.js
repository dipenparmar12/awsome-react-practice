import React from 'react'
import Heading3 from 'components/atoms/Heading3'
import Img1 from 'assets/image_1.png'

import './Analytics.scss'
import Icons from 'components/Icons'

export default function Analytics() {
  return (
    <div className="">
      <div class="analytics_heading">
        <Heading3> Analytics </Heading3>
        <Heading3> Event Distribution </Heading3>
      </div>

      <div class="analytics_container">
        <div id="line_chart">
          <h4 className="h4">Daily views</h4>
        </div>

        <div id="event_dist">Event Distribution</div>

        <div id="card_medium">
          <div className="top">
            <div className="img_wrapper">
              <img src={Img1} alt="Img1" />
            </div>
            <span className="icon_wrapper" style={{ '--bg_color': '#52459f' }}>
              <Icons.Pause className="" />
            </span>
          </div>

          <h4 className="h4"> Strange Clouds Formation </h4>
          <p> By Mike Taylor </p>
        </div>

        <div id="card_1" className="feature_card">
          <span className="icon_wrapper" style={{ '--bg_color': '#84e9f5' }}>
            <Icons.Pause className="" />
          </span>
          <h4 className="h4"> Scheduled Posts </h4>
        </div>

        <div id="card_2" className="feature_card">
          <span className="icon_wrapper" style={{ '--bg_color': '#84e9f5' }}>
            <Icons.Pause className="" />
          </span>
          <h4 className="h4"> Add new Post </h4>
        </div>
      </div>

      {/* <div className="analytics">
        <div className="analytics__box_1">div1 </div>
        <div className="analytics__box_2">div2 </div>
        <div className="analytics__box_3">div3 </div>
        <div className="analytics__box_4">div4 </div>
      </div> */}
    </div>
  )
}
