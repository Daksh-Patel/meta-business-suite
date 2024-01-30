import { BiMessageRounded } from "react-icons/bi"
import { BsFilePost } from "react-icons/bs"
import { FiCalendar } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import { GoBell } from "react-icons/go"
import { MdLeaderboard } from "react-icons/md"
import { SiGoogleads } from "react-icons/si"
import { TiHome } from "react-icons/ti"

export const MenuItemsList = [
  {
    id: 1,
    href: "/",
    title: "Home",
    icon: TiHome,
  },
  {
    id: 2,
    href: "/notification",
    title: "Notification",
    icon: GoBell,
  },
  {
    id: 3,
    href: "#",
    title: "Inbox",
    icon: BiMessageRounded,
  },
  {
    id: 4,
    href: "#",
    title: "Posts and stories",
    icon: BsFilePost,
  },
  {
    id: 5,
    href: "#",
    title: "Planner",
    icon: FiCalendar,
  },
  {
    id: 6,
    href: "#",
    title: "Ads",
    icon: SiGoogleads,
  },
  {
    id: 7,
    href: "#",
    title: "Insights",
    icon: MdLeaderboard,
  },
  {
    id: 8,
    href: "#",
    title: "All tools",
    icon: GiHamburgerMenu,
  },
]
