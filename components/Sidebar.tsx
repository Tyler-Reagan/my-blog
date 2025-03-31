"use client";

import {
    ArrowRightIcon,
    ArrowLeftIcon,
    HomeIcon,
    CogIcon,
    UserIcon,
    EllipsisVerticalIcon,
    WrenchScrewdriverIcon,
    CommandLineIcon,
    CloudIcon,
    LightBulbIcon,
    PaintBrushIcon,
    PuzzlePieceIcon,
    SunIcon,
    BeakerIcon,
    GlobeAltIcon,
    TvIcon,
    BookOpenIcon,
    CalculatorIcon,
    LinkIcon,
  } from '@heroicons/react/24/outline';
  import { useState } from 'react';
  import SidebarItem from './SidebarItem';
import { HomeModernIcon } from '@heroicons/react/24/solid';
  
  // This sidebar component is for both mobile and desktop
  function Sidebar({ children, expanded, setExpanded }: any) {
    return (
      <div className="relative">
        {/* 
          This div is used to create the background overlay when the sidebar is expanded
          It is only visible on mobile screens
        */}
        <div
          className={`fixed inset-0 -z-10 block bg-gray-400  ${expanded ? 'block sm:hidden' : 'hidden'}`}
        />
        <aside
          className={`box-border h-screen transition-all ${expanded ? 'w-5/6 sm:w-64' : 'w-0 sm:w-20'}`}
        >
          <nav className="flex h-full flex-col border-r bg-white shadow-sm">
            <div className="flex items-center justify-between p-4 pb-2">
              <img
                src="https://img.logoipsum.com/243.svg"
                className={`overflow-hidden transition-all ${
                  expanded ? 'w-32' : 'w-0'
                }`}
                alt=""
              />
              <div className={`${expanded ? '' : 'hidden sm:block'}`}>
                <button
                  onClick={() => setExpanded((curr: boolean) => !curr)}
                  className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
                >
                  {expanded ? (
                    <ArrowRightIcon className="h-6 w-6" />
                  ) : (
                    <ArrowLeftIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
            <ul className="flex-1 px-3">{children}</ul>
            <div className="flex border-t p-3">
              <img
                src="https://static.wikia.nocookie.net/d3967202-01cb-4c18-ac71-ec9d6ccacc76"
                alt=""
                className="h-10 w-10 rounded-md"
              />
              <div
                className={`
                flex items-center justify-between
                overflow-hidden transition-all ${expanded ? 'ml-3 w-52' : 'w-0'}
            `}
              >
                <div className="leading-4">
                  <h4 className="font-semibold">Tyler Reagan</h4>
                  <span className="text-xs text-gray-600">tylerreagan98@gmail.com</span>
                </div>
                <EllipsisVerticalIcon className="h-6 w-6" />
              </div>
            </div>
          </nav>
        </aside>
      </div>
    );
  }
  
  export default function MakeSidebar() {
    const [expanded, setExpanded] = useState(true);
    const navBarItems = [
      {
        icon: <HomeIcon />,
        text: 'Home',
        active: true,
      },
      {
        icon: <CommandLineIcon />,
        text: 'Developer Corner',
        active: true,
        subMenu: [
          {
            icon: <BeakerIcon />,
            text: 'Blog',
          },
          {
            icon: <GlobeAltIcon />, 
            text: 'GitHub'
          },
        ],
      },
      {
        icon: <WrenchScrewdriverIcon />,
        text: 'Hobby Hole',
        active: true,
        subMenu: [
          {
            icon: <PaintBrushIcon />,
            text: 'AoS & Mini Painting',
          },
          {
            icon: <PuzzlePieceIcon />, 
            text: 'Board Games'
          },
          {
            icon: <SunIcon />,
            text: 'Hiking & Climbing'
          },
        ],
      },
      {
        icon: <HomeModernIcon />,
        text: 'Personal Life',
        active: true,
        subMenu: [
          {
            icon: <CalculatorIcon />,
            text: 'Finance'
          },
        ],
      },
      {
        icon: <LinkIcon />,
        text: 'External Links',
        active: true,
        subMenu: [
          {
            icon: <TvIcon />,
            text: 'Letterboxd',
          },
          {
            icon: <BookOpenIcon />, 
            text: 'GoodReads'
          },
        ],
      },
      // {
      //   icon: <UserIcon />,
      //   text: 'Profile',
      //   active: true,
      //   subMenu: [
      //     {
      //       icon: <UserIcon />,
      //       text: 'Profile',
      //     },
      //     {
      //       icon: <CogIcon />,
      //       text: 'Settings',
      //     },
      //   ],
      // },
    ];
  
    // Desktop Sidebar
    return (
      <Sidebar expanded={expanded} setExpanded={setExpanded}>
        {navBarItems.map((item, index) => (
          <SidebarItem key={index} expanded={expanded} {...item} />
        ))}
      </Sidebar>
    );
  }