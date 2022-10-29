import { TbCalendarStats, TbSmartHome } from 'react-icons/tb'
import { RiSettingsLine } from 'react-icons/ri'
import {
  BsCaretRightFill,
  BsBookmarkDash,
  BsBookmarkCheck,
} from 'react-icons/bs'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { CiCirclePlus, CiBookmarkMinus } from 'react-icons/ci'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiMessageSquareCheck } from 'react-icons/bi'

/**
 * Icons for the application
 * @example
 * <Icons.Home />
 * <Icons.Calendar className="inline-block mb-1" />
 */
const Icons = {
  // Test: MdOutlineCloudDone,
  // Sorting: <BsChevronExpand className="inline-block px-0.5 " />,
  Home: TbSmartHome,
  Calendar: TbCalendarStats,
  Settings: RiSettingsLine,
  CaretRight: BsCaretRightFill,

  OutlinePlusCircle: CiCirclePlus,
  Clock: AiOutlineClockCircle,
  Check: BiMessageSquareCheck,
  Bookmark: CiBookmarkMinus,
}

export default Icons
