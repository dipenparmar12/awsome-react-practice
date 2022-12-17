/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.scss'
import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as MassengerIcon } from './icons/messenger.svg'
import { ReactComponent as CaretIcon } from './icons/caret.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as CogIcon } from './icons/cog.svg'
import { ReactComponent as ChevronIcon } from './icons/chevron.svg'
import { ReactComponent as ArrowIcon } from './icons/arrow.svg'
import { ReactComponent as BoltIcon } from './icons/bolt.svg'
import { CSSTransition } from 'react-transition-group'

export default function Nav() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MassengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropDownMenu />
      </NavItem>
    </Navbar>
  )
}

const Navbar = ({ children }) => (
  <nav className='navbar'>
    <ul className='navbar-nav'>{children}</ul>
  </nav>
)

const NavItem = ({ icon, children }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  )
}

const DropDownMenu = ({ children }) => {
  const [activeMenu, setActiveMenu] = React.useState('main')
  const [menuHeight, setMenuHeight] = React.useState(null)

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  const DropDownItem = (itemProps) => {
    return (
      <a
        href='#'
        className='menu-item'
        onClick={() => itemProps.goToMenu && setActiveMenu(itemProps.goToMenu)}
      >
        <span className='icon-button'>{itemProps.leftIcon}</span>
        {itemProps.children}
        <span className='icon-right'>{itemProps.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className='dropdown' style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames='menu-primary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu='settings'>
            Settings
          </DropDownItem>
          <DropDownItem leftIcon='🦧' rightIcon={<ChevronIcon />} goToMenu='animals'>
            Animals
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropDownItem leftIcon={<ArrowIcon />} goToMenu='main'>
            <h2>My Tutorial</h2>
          </DropDownItem>
          <DropDownItem leftIcon={<BoltIcon />}>HTML</DropDownItem>
          <DropDownItem leftIcon={<BoltIcon />}>CSS</DropDownItem>
          <DropDownItem leftIcon={<BoltIcon />}>JavaScript</DropDownItem>
          <DropDownItem leftIcon={<BoltIcon />}>Awesome!</DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropDownItem leftIcon={<ArrowIcon />} goToMenu='main'>
            <h3>Animals</h3>
          </DropDownItem>
          <DropDownItem leftIcon='🦘'>Kangaroo</DropDownItem>
          <DropDownItem leftIcon='🐸'>Frog</DropDownItem>
          <DropDownItem leftIcon='🦋'>Horse?</DropDownItem>
          <DropDownItem leftIcon='🦔'>Hedgehog</DropDownItem>

          <DropDownItem leftIcon='🦘'>Kangaroo</DropDownItem>
          <DropDownItem leftIcon='🐸'>Frog</DropDownItem>
          <DropDownItem leftIcon='🦋'>Horse?</DropDownItem>
          <DropDownItem leftIcon='🦔'>Hedgehog</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  )
}
