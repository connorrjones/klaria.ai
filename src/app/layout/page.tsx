"use client"

import React, { useState } from "react";
import { Sidebar } from "(components)/sidebar";
import { MenuIcon } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  setCurrentPage: (page: string) => void;
}

export default function Layout({ children, setCurrentPage }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Chat", id: "chat" },
    { label: "Dashboard", id: "dashboard" },
    { label: "Notifications", id: "notifications" },
    { label: "Settings", id: "settings" },
    { label: "Help", id: "help" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950"
    >
      <header
        className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between p-4"
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

        <button
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
        >
          <MenuIcon size={24} />
        </button>

        <nav className="hidden md:flex items-center space-x-4">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className="p-2 rounded-lg hover:bg-white/10 text-white"
              id={`xibmzp_${index}`}
            >
              <span id={`fnna8s_${index}`}>{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          className="hidden md:flex items-center p-2 rounded-lg hover:bg-white/10 text-white"
        >
          <span>Profile</span>
        </button>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-60 md:hidden"
          onClick={toggleMobileMenu}
        >
          <div
            className="bg-gradient-to-br from-blue-900 to-purple-900 w-64 h-screen p-4 z-70"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button
                className="text-white"
                onClick={toggleMobileMenu}
              >
                &times;
              </button>
            </div>
            <nav>
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <li key={item.id} id={`8rbf8n_${index}`}>
                    <button
                      onClick={() => {
                        setCurrentPage(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left p-2 text-white hover:bg-white/10 rounded"
                      id={`15m2s2_${index}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className="w-full text-left p-2 text-white hover:bg-white/10 rounded"
                  >
                    Profile
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      <div className="flex pt-16">
        <div className="md:hidden">
          <Sidebar setCurrentPage={setCurrentPage} />
        </div>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
