'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import MobileNavbar from '@/components/MobileNavbar'
import Dashboard from '@/app/dashboard/page'
import Login from '@/app/login/page'



export default function Home() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'login':
        return <Login />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
    <Sidebar 
      setCurrentPage={setCurrentPage} 
      currentPage={currentPage} 
      className="hidden md:block md:w-64 md:flex-shrink-0"
    />
    <div className="flex flex-col flex-grow">
      <main className="flex-grow p-4 md:ml-64">
        {renderPage()}
      </main>
      <MobileNavbar 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        className="md:hidden"
      />
    </div>
  </div>
  )
}


