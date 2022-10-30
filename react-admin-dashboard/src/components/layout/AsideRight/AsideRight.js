import React from 'react'
import Heading3 from 'components/atoms/Heading3'
import Icons from 'components/Icons'
import AvatarImg from 'assets/avatar.png'

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

      {/* AVATAR_PROFiLE */}
      <div className="avatar">
        <div className="avatar__img">
          <img src={AvatarImg} alt="" />
        </div>
        <Heading3 className="avatar__name">AR Shakir</Heading3>
        <p className="avatar__designation">UI/UX Designer @RedWale</p>
      </div>

      {/* AVATAR_INFO */}
      <div className="statics">
        <div>
          <Heading3 className="statics__value">786k</Heading3>
          <p className="statics__title">Followers</p>
        </div>
        <div>
          <Heading3 className="statics__value">298</Heading3>
          <p className="statics__title">Following</p>
        </div>
        <div>
          <Heading3 className="statics__value">438</Heading3>
          <p className="statics__title">Posts</p>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="profile_buttons">
        <button className="btn btn_primary">View Profile</button>
        <button className="btn btn_secondary">Edit Profile</button>
      </div>
    </aside>
  )
}
