import { TbCalendarStats, TbSmartHome } from 'react-icons/tb'
import { RiPauseMiniLine } from 'react-icons/ri'
import {
  BsCaretRightFill,
  BsBookmarkDash,
  BsTwitter,
  BsFacebook,
} from 'react-icons/bs'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { CiCirclePlus, CiBookmarkMinus } from 'react-icons/ci'
import {
  AiFillClockCircle,
  AiFillPauseCircle,
  AiOutlineMail,
} from 'react-icons/ai'
import { BiMessageSquareCheck, BiSearch } from 'react-icons/bi'
import { IoPause } from 'react-icons/io'
import { FiHeart, FiInstagram, FiShoppingCart } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdEmail, MdWifiCalling3 } from 'react-icons/md'
import { FaPinterestP } from 'react-icons/fa'

import classNames from 'classnames'

function IconHOC({ Icon = <></>, className, ...rest }) {
  return (
    <Icon
      className={classNames('inline-block text-purple-500', className)}
      {...rest}
    />
  )
}

/**
 * Icons for the application
 * @example
 * <Icons.Home />
 * <Icons.Calendar className="inline-block mb-1" />
 */
const Icons = {
  Home: ({ ...rest }) => IconHOC({ Icon: MdEmail, ...rest }),
  Clock: ({ ...rest }) => IconHOC({ Icon: AiFillClockCircle, ...rest }),
  Twitter: ({ ...rest }) => IconHOC({ Icon: BsTwitter, ...rest }),
  Facebook: ({ ...rest }) => IconHOC({ Icon: BsFacebook, ...rest }),
  PinterestP: ({ ...rest }) => IconHOC({ Icon: FaPinterestP, ...rest }),
  Instagram: ({ ...rest }) => IconHOC({ Icon: FiInstagram, ...rest }),
  Calling3: ({ ...rest }) => IconHOC({ Icon: MdWifiCalling3, ...rest }),
  Search: ({ ...rest }) => IconHOC({ Icon: BiSearch, ...rest }),
  ShoppingCart: ({ ...rest }) => IconHOC({ Icon: FiShoppingCart, ...rest }),
}

export default Icons