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

export default function Nav() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MassengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropDownMenu>hello</DropDownMenu>
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
      {open ? children : <div></div>}
    </li>
  )
}

const DropDownMenu = ({ icon, children }) => {
  const DropDownItem = (props) => {
    return (
      <a href='#' className='menu-item'>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className='dropdown'>
      <DropDownItem> My Profile </DropDownItem>
      <DropDownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
        Settings
      </DropDownItem>
    </div>
  )
}
