import React from 'react'
import './AsideLeft.scss'
import Logo from '../../assets/logo.png'
import Icons from '../Icons'
import Hr from '../atoms/Hr'
import classNames from 'classnames'

export default function AsideLeft() {
  return (
    <aside className="sidebar">
      <div className="head">
        <div className="head__img">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="head__content">
          <h3>Redwhale</h3>
          <p>Growth & Marketing</p>
        </div>
      </div>

      <ul className="nav_links">
        <li className="nav_links__item active">
          <span className="nav_links__icon">
            <Icons.Home className="inline-block" />
          </span>
          <span className="nav_links__title"> Dashboard </span>
        </li>{' '}
        <li className="nav_links__item">
          <span className="nav_links__icon">
            <Icons.Calendar className="inline-block" />
          </span>
          <span className="nav_links__title"> Activity </span>
        </li>
        <li className="nav_links__item">
          <span className="nav_links__icon">
            <Icons.Settings className="inline-block" />
          </span>
          <span className="nav_links__title"> Settings </span>
        </li>
      </ul>

      <HorizontalLine />

      <ul>
        <li> ONE </li>
      </ul>
    </aside>
  )
}

const HorizontalLine = ({ ...rest }) => {
  return (
    <div style={{ paddingTop: '30px', paddingBottom: '10px' }}>
      <div className={classNames('hr')} {...rest} />
    </div>
  )
}
