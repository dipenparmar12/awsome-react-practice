import React from 'react'
import classNames from 'classnames'
import Logo from '../../../assets/logo.png'
import Icons from '../../Icons'
import Hr from '../../atoms/Hr'
import './AsideLeft.scss'

export default function AsideLeft() {
  return (
    <aside className="sidebar">
      <div className="sidebar_head">
        <div className="sidebar_head__img">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="sidebar_head__content">
          <h3>Redwhale</h3>
          <p>Growth & Marketing</p>
        </div>
      </div>

      <div>
        <ul className="nav__links primary">
          <li className="nav__item active">
            <span className="nav__icon">
              <Icons.Home />
            </span>
            <span className=""> Dashboard </span>
          </li>
          <li className="nav__item">
            <span className="nav__icon">
              <Icons.Calendar />
            </span>
            <span className=""> Activity </span>
          </li>
          <li className="nav__item">
            <span className="nav__icon">
              <Icons.Settings />
            </span>
            <span className=""> Settings </span>
          </li>
        </ul>

        <div className="group">
          <HorizontalLine />

          <div className="group__heading active">
            <div className="group__heading__title">
              <span className="">Post's</span>
              <Icons.CaretRight className="inline-block rotate-90" />
            </div>

            <Icons.OutlinePlusCircle
              className=""
              style={{ fontSize: '28px', color: '#a9a9a9' }}
            />
          </div>

          <ul className="nav__links">
            <li className="nav__item ">
              <span className="nav__icon">
                <Icons.Check />
              </span>
              <span className=""> Published </span>
            </li>
            <li className="nav__item ">
              <span className="nav__icon">
                <Icons.Clock />
              </span>
              <span className=""> Today Scheduled </span>
              <span className="nav__notification"> +2 </span>
            </li>{' '}
            <li className="nav__item ">
              <span className="nav__icon">
                <Icons.Bookmark />
              </span>
              <span className=""> Bookmarks </span>
            </li>
          </ul>
        </div>

        <div className="group">
          <HorizontalLine />

          <div className="group__heading active">
            <div className="group__heading__title">
              <span className="">Favorite users</span>
              <Icons.CaretRight className="inline-block " />
            </div>

            <Icons.OutlinePlusCircle
              className=""
              style={{ fontSize: '28px', color: '#a9a9a9' }}
            />
          </div>

          <ul className="nav__links d-none">
            <li className="nav__item ">
              <span className="nav__icon">
                <Icons.Check />
              </span>
              <span className=""> Published </span>
            </li>
            <li className="nav__item ">
              <span className="nav__icon">
                <Icons.Clock />
              </span>
              <span className=""> Today Scheduled </span>
              <span className="nav__notification"> +2 </span>
            </li>{' '}
            <li className="nav__item ">
              <span className="nav__icon">
                <Icons.Bookmark />
              </span>
              <span className=""> Bookmarks </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar_footer">
        <span className="">
          <Icons.PlusOutline />
        </span>
        <span className=""> Invite new member </span>
      </div>
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
