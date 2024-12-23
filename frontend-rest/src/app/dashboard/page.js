import React from 'react'
import Sidebar from '@/components/Sidebar'
import MobileNavbar from '@/components/MobileNavbar'

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto ">
      {/* Sidebar y Navbar */}
      <Sidebar />
      <MobileNavbar />

      {/* Contenido de la página */}
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Hola</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Este es un ejemplo de cómo el contenido se ajusta al tema claro o oscuro.
        </p>
      </div>
    </div>
  )
}
