'use client';
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import MobileNavbar from '@/components/MobileNavbar'
import Dashboard from '@/app/dashboard/page'
import Login from '@/app/login/page'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('dashboard')

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
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
        {renderPage()}
      </div>
      <MobileNavbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  )
}

