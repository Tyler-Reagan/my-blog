"use client";

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

interface SidebarItemProps {
  active?: boolean;
  icon: React.ReactNode;
  text: string;
  expanded: boolean;
  subMenu?: SubMenuItemProps[] | null;
  link?: string; // Added link prop for page navigation
}

// We're assuming that the sub-menu items will not have further sub-menu items therefore, it cannot be expanded
interface SubMenuItemProps extends Omit<SidebarItemProps, 'expanded'> {
  expanded?: never;
  subMenu?: never;
}

function HoveredSubMenuItem({ icon, text, active, link }: SubMenuItemProps) {
  return (
    <div
      className={`my-2 rounded-md p-2 ${
        active ? 'bg-gray-300' : ' hover:bg-indigo-50'
      }`}
    >
      <div className="flex items-center justify-center ">
        <span className="text-primary-500 h-6 w-6 ">{icon}</span>
        <span className="text-primary-500 ml-3 w-28 text-start">{text}</span>
        <div className="bg-primary-200 h-1" />
      </div>
    </div>
  );
}

export default function SidebarItem({
  icon,
  active = false,
  text,
  expanded = false,
  subMenu = null,
  link = '#', // Default to '#' if no link is provided
}: SidebarItemProps) {
  const [expandSubMenu, setExpandSubMenu] = useState(false);

  useEffect(() => {
    if (!expanded) {
      setExpandSubMenu(false);
    }
  }, [expanded]);

  // Calculate the height of the sub-menu assuming each item is 40px tall
  const subMenuHeight = expandSubMenu
    ? `${((subMenu?.length || 0) * 40 + (subMenu! && 15)).toString()}px`
    : 0;

  // Wrap the whole item in the Link component to make the entire menu item clickable
  const itemContent = (
    <li>
      <button
        className={`
           group relative my-1 flex w-full cursor-pointer
           items-center rounded-md px-3
           py-2 font-medium transition-colors
           ${
             active && !subMenu
               ? 'text-primary-500 bg-gradient-to-tr from-indigo-200 to-indigo-100'
               : 'text-gray-600 hover:bg-indigo-50'
           }
           ${!expanded && 'hidden sm:flex'}
       `}
        onClick={() => setExpandSubMenu((curr) => expanded && !curr)}
      >
        <span className="h-6 w-6">{icon}</span>

        <span
          className={`overflow-hidden text-start transition-all ${
            expanded ? 'ml-3 w-44' : 'w-0'
          }`}
        >
          {text}
        </span>
        {subMenu && (
          <div
            className={`absolute right-2 h-4 w-4${
              expanded ? '' : 'top-2'
            } transition-all ${expandSubMenu ? 'rotate-90' : 'rotate-0'}`}
          >
            <ChevronRightIcon />
          </div>
        )}
      </button>
    </li>
  );

  return (
    <>
      {link ? (
        // If a link is provided, wrap the whole item in a Link component
        <Link href={link}>
          {itemContent}
        </Link>
      ) : (
        itemContent
      )}

      {/* Render sub-menu items if the item has a sub-menu */}
      <ul className="sub-menu pl-6" style={{ height: subMenuHeight }}>
        {expanded &&
          subMenu?.map((item, index) => (
            <SidebarItem key={index} {...item} expanded={expanded} />
          ))}
      </ul>
    </>
  );
}
