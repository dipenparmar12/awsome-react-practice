import { NavLink } from 'react-router-dom'
import useOutsideClicked from '../../hooks/useOutsideClicked'
import Svg from '../../lib/Svg/Svg'
import cn from '../../utils/classNames'

export const NavLinkItem = ({ route }) => {
  if (!route) return null
  return (
    <NavLink
      to={route?.path || '/'}
      className={({ isActive }) => {
        return cn(
          'block py-2 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-black dark:text-gray-400 dark:hover:bg-sky-800',
          isActive &&
            'bg-gray-200 text-black dark:bg-sky-900 dark:text-gray-200 ',
        )
      }}
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
        className="block max-h-full space-y-1 overflow-y-auto text-gray-700 transition duration-200 divide-y rounded dark:text-gray-400 group"
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
