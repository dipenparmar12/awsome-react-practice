import React from 'react'
import Heading3 from 'components/atoms/Heading3'
import Img1 from 'assets/image_1.png'
import CircleImg from 'assets/circle.png'
import GraphDummyImg from 'assets/graph-dummy.png'

import './Analytics.scss'
import Icons from 'components/Icons'
import Heading4 from 'components/atoms/Heading4'

export default function Analytics() {
  return (
    <div className="">
      <div className="analytics_heading">
        <Heading3> Analytics </Heading3>
        <Heading3 className="sm-hidden"> Event Distribution </Heading3>
      </div>

      <div className="analytics_content">
        <div id="line_chart">
          <Heading4>Daily views</Heading4>
          <img src={GraphDummyImg} alt="GraphDummyImg" />
        </div>

        <div id="event_dist">
          <h4 id="event_dist__title">Last 30 days Performance</h4>

          <div id="event_dist__img">
            {/* TODO:: Content */}
            <img
              src={CircleImg}
              alt="Circle"
              style={{ height: '140px', textAlign: 'center' }}
            />
          </div>

          <h4 id="event_dist__sub_title"> Events DISTRIBUTION </h4>

          <ul id="event_dist__items">
            <li className="event_dist__item">
              <div className="icon" style={{ '--bg_color': '#f7896a' }}>
                <Icons.Heart className="" />
              </div>
              <div> Likes </div>
            </li>
            <li className="event_dist__item">
              <div className="icon" style={{ '--bg_color': '#84e9f5' }}>
                <Icons.ArrowUpDown className="" />
              </div>
              <div>Views </div>
            </li>
            <li className="event_dist__item">
              {' '}
              <div className="icon" style={{ '--bg_color': '#fdbc64' }}>
                <Icons.UserAddLine className="" />
              </div>
              <div>Follows </div>
            </li>
            <li className="event_dist__item">
              {' '}
              <div className="icon" style={{ '--bg_color': '#52459f' }}>
                <Icons.ChatDots className="" />
              </div>
              <div>Shares </div>
            </li>
          </ul>
        </div>

        <div id="card_medium">
          <div className="top">
            <div className="img_wrapper">
              <img src={Img1} alt="Img1" />
            </div>
            <span className="icon_wrapper" style={{ '--bg_color': '#52459f' }}>
              <Icons.Pause className="" />
            </span>
          </div>

          <Heading4> Strange Clouds Formation </Heading4>
          <p> By Mike Taylor </p>
        </div>

        <div id="card_1" className="feature_card">
          <span className="icon_wrapper" style={{ '--bg_color': '#84e9f5' }}>
            <Icons.Pause className="" />
          </span>
          <Heading4> Scheduled Posts </Heading4>
        </div>

        <div id="card_2" className="feature_card">
          <span className="icon_wrapper" style={{ '--bg_color': '#84e9f5' }}>
            <Icons.Pause className="" />
          </span>
          <Heading4> Add new Post </Heading4>
        </div>
      </div>
    </div>
  )
}
