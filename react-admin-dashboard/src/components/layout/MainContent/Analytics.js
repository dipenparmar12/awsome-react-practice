import React from 'react'
import Heading3 from 'components/atoms/Heading3'
import Img1 from 'assets/image_1.png'

import './Analytics.scss'
import Icons from 'components/Icons'

export default function Analytics() {
  return (
    <div className="">
      <div class="analytics_container_1">
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
            <span className="icon_wrapper">
              &nbsp;
              <Icons.Pause className="" />
            </span>
          </div>

          <h4 className="h4"> Strange Clouds Formation </h4>
          <p> By Mike Taylor </p>
        </div>
        <div id="item-3">&nbsp;</div>
        <div id="item-4">&nbsp;</div>
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
