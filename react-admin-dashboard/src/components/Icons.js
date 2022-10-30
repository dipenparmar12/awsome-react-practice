import { TbCalendarStats, TbSmartHome } from 'react-icons/tb'
import { RiPauseMiniLine, RiSettingsLine } from 'react-icons/ri'
import {
  BsCaretRightFill,
  BsBookmarkDash,
  BsBookmarkCheck,
} from 'react-icons/bs'
import { HiOutlinePlusCircle, HiOutlinePlus } from 'react-icons/hi'
import { CiCirclePlus, CiBookmarkMinus } from 'react-icons/ci'
import {
  AiFillPauseCircle,
  AiOutlineClockCircle,
  AiOutlinePlus,
} from 'react-icons/ai'
import { BiMessageSquareCheck } from 'react-icons/bi'
import { IoPause } from 'react-icons/io'

import classNames from 'classnames'

function IconHOC({ Icon = <></>, className, ...rest }) {
  return <Icon className={classNames('app-icon', className)} {...rest} />
}

/**
 * Icons for the application
 * @example
 * <Icons.Home />
 * <Icons.Calendar className="inline-block mb-1" />
 */
const Icons = {
  Home: TbSmartHome,
  Calendar: TbCalendarStats,
  Settings: RiSettingsLine,
  CaretRight: BsCaretRightFill,
  OutlinePlusCircle: ({ ...rest }) => IconHOC({ Icon: CiCirclePlus, ...rest }),
  Clock: AiOutlineClockCircle,
  Check: BiMessageSquareCheck,
  Bookmark: CiBookmarkMinus,
  PlusOutline: ({ ...rest }) => IconHOC({ Icon: AiOutlinePlus, ...rest }),
  Plus: ({ ...rest }) => IconHOC({ Icon: HiOutlinePlus, ...rest }),
  Pause: ({ ...rest }) => IconHOC({ Icon: RiPauseMiniLine, ...rest }),
}

export default Icons
