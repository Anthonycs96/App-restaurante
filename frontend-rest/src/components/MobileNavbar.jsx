import React from 'react'
import { Home, Mail, Users, Settings } from 'lucide-react'

export default function MobileNavbar({ setCurrentPage, currentPage }) {
  const navItems = [
    { icon: Home, label: 'Dashboard', page: 'dashboard' },
    { icon: Mail, label: 'Login', page: 'login' },
  ]

  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg md:hidden">
      <ul className="flex justify-around items-center h-14">
        {navItems.map((item) => (
          <li key={item.page}>
            <button
              onClick={() => setCurrentPage(item.page)}
              className={`flex flex-col items-center justify-center w-16 h-14 rounded-full ${
                currentPage === item.page 
                  ? 'text-blue-500 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20' 
                  : 'text-gray-600 dark:text-gray-400'
              } hover:text-blue-500 dark:hover:text-blue-400 transition-colors`}
            >
              <item.icon size={20} />
              <span className="text-xs mt-0.5">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

