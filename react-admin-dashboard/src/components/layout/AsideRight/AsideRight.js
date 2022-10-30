import Heading3 from 'components/atoms/Heading3'
import Icons from 'components/Icons'
import React from 'react'

import './AsideRight.scss'

export default function AsideRight() {
  return (
    <aside className="sidebar_right ">
      <div className="aside__top">
        <div>
          <Heading3 className="aside__top__title">Hi Shakir</Heading3>
          <p className="">Good Morning.</p>
        </div>

        <div className="aside__top__icons">
          <div className="icon">
            <Icons.ChatDots className="" />
          </div>
          <div className="icon">
            <Icons.OutlineBell className="" />
          </div>
        </div>
      </div>

      {/* <div className="aside__profile">
        <div className="avatar__img">
          <img src="" alt="" />
        </div>
        <h5 className="avatar__name">AR Shakir</h5>
        <p>UI/UX Designer @RedWale</p>

        <div className="avatar__statics">
          <div>
            <h4>786k</h4>
            <p>Followers</p>
          </div>
          <div>
            <h4>786k</h4>
            <p>Followers</p>
          </div>
          <div>
            <h4>786k</h4>
            <p>Followers</p>
          </div>
        </div>

        <div className="avatar__buttons">
          <button>View Profile</button>
          <button>Edit Profile</button>
        </div>
      </div> */}
    </aside>
  )
}
