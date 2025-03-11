"use client"

import React, { useState } from "react";
import {
  HomeIcon,
  MessageCircleIcon,
  SettingsIcon,
  HelpCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  LayoutIcon,
  BellIcon,
  MenuIcon,
} from "lucide-react";

interface SidebarProps {
  setCurrentPage: (page: string) => void;
}

export function Sidebar({ setCurrentPage }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: HomeIcon, label: "Home", id: "home" },
    { icon: MessageCircleIcon, label: "Chat", id: "chat" },
    { icon: LayoutIcon, label: "Dashboard", id: "dashboard" },
    { icon: BellIcon, label: "Notifications", id: "notifications" },
    { icon: SettingsIcon, label: "Settings", id: "settings" },
    { icon: HelpCircleIcon, label: "Help", id: "help" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`
 fixed h-screen transition-all duration-300 ease-in-out z-10
 ${isCollapsed ? "w-20" : "w-64"}
 bg-white/10 backdrop-blur-md border-r border-white/10
 `}
    >
      <div className="flex flex-col h-full">
        <div
          className="flex items-center justify-between p-4 border-b border-white/10"
        >
          <div className="flex items-center">
            <div
              className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
            >
              <span className="text-white font-bold">
                AI
              </span>
            </div>
            <h1 className="ml-2 text-white font-bold">
              NexusAI
            </h1>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-white/10 text-white mr-2"
            >
              <MenuIcon size={20} />
            </button>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-full hover:bg-white/10 text-white"
            >
              {isCollapsed ? (
                <ChevronRightIcon size={20} />
              ) : (
                <ChevronLeftIcon size={20} />
              )}
            </button>
          </div>
        </div>

        <nav
          className={`flex-1 p-4 ${isMobileMenuOpen ? "block" : "hidden md:block"}`}
        >
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={item.id} id={`dt4ewg_${index}`}>
                <button
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
 flex items-center w-full p-3 rounded-lg hover:bg-white/10 text-white
 ${isCollapsed ? "justify-center" : "justify-start"}
 `}
                  id={`xibmzp_${index}`}
                >
                  <span className="ml-3" id={`fnna8s_${index}`}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center">
            <div
              className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2"
            >
              <span className="text-white font-bold">
                AI
              </span>
            </div>
            {!isCollapsed && (
              <h1 className="text-white font-bold">
                NexusAI
              </h1>
            )}
          </div>
          <button
            className={`
 mt-2 flex items-center p-3 rounded-lg hover:bg-white/10 text-white
 ${isCollapsed ? "justify-center" : "justify-start"}
 `}
          >
            {!isCollapsed && (
              <span className="ml-3">
                Profile
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
