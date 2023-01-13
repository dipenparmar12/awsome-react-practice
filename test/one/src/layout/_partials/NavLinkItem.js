import { NavLink } from 'react-router-dom'
import useOutsideClicked from '../../hooks/useOutsideClicked'
import Svg from '../../lib/Svg/Svg'
import cn from '../../utils/classNames'

export const NavLinkItem = ({ route }) => {
  if (!route) return null
  return (
    <NavLink
      to={route?.path || '/'}
      className={({ isActive }) =>
        cn('sidebar_nav__item', isActive && 'active')
      }
    >
      <div className="flex items-center ">
        <span className="w-5 pt-1">{route?.icon}</span>
        <span className="ml-3">{route?.label}</span>
      </div>
    </NavLink>
  )
}

export const NavDropDownItem = ({ route }) => {
  const { ref, isVisible, setIsVisible } = useOutsideClicked()
  if (!route) return null
  return (
    <>
      <ul
        ref={ref}
        className="max-h-full space-y-1 overflow-y-auto text-gray-700 divide-y dark:text-gray-400 sidebar_nav__list group"
      >
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="flex items-center w-full px-4 py-2 transition-transform transform rounded-md"
        >
          <span>{route?.icon}</span>
          <span className="ml-2 font-medium">Dashboard</span>
          <span className="ml-auto">
            <Svg.ArrowDown
              className={cn([
                'transition-transform group-hover:',
                isVisible ? 'rotate-0' : '-rotate-90',
              ])}
            />
          </span>
        </button>

        <ul
          className={cn([
            'pl-4 space-y-2 border-none',
            isVisible ? 'block' : 'hidden',
          ])}
        >
          {Object.values(route.children).map((child) => (
            <li key={child.path}>
              <NavLinkItem route={child} />
            </li>
          ))}
        </ul>
      </ul>
    </>
  )
}
