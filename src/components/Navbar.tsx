import * as React from "react";
import { NavLink } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { ImStopwatch } from "react-icons/im";
import classNames from "classnames";
import { calendarSegment, stopwatchSegment, worldClockSegment } from "../constants";
import { IconType } from "react-icons";

interface NavItemProps {
  label: string;
  segment: string;
  Icon: IconType;
}

const NavItem: React.FC<NavItemProps> = ({label, segment, Icon}) => {
  return (
    <li className="flex-1">
      <NavLink
        to={`/${segment}`}
        className={state => classNames({
          "p-16 flex gap-8 justify-center text-center": true,
          "text-muted hover:text-white": !state.isActive,
          "bg-white text-dark-800 font-medium pointer-events-none": state.isActive
        })}
      >
        <Icon size="1.5rem" />
        <span className="hidden md:inline-block select-none">{label}</span>
      </NavLink>
    </li>
  )
}

const Navbar: React.FC = () => {
  return (
    <header className="bg-dark-600 mb-32">
      <nav className="md:container">
        <ul className="flex">
          <NavItem
            label="World clock"
            segment={worldClockSegment}
            Icon={BiWorld}
          />
          <NavItem
            label="Calendar"
            segment={calendarSegment}
            Icon={BiCalendar}
          />
          <NavItem
            label="Stopwatch"
            segment={stopwatchSegment}
            Icon={ImStopwatch}
          />
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;