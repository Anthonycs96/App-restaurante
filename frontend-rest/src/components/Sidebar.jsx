'use client';
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ChevronLeft, ChevronRight, Home, Users } from 'lucide-react'

export default function Sidebar({ setCurrentPage, currentPage }) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggleCollapse = () => setIsCollapsed(!isCollapsed)

    // Los items de navegación se dividen en General y Otros
    const generalNavItems = [
        { id: 'dashboard', name: 'Dashboard', icon: Home },
    ]

    const otherNavItems = [
        { id: 'login', name: 'Login', icon: Users },
    ]

    return (
        <aside
            className={`rounded-md bg-white dark:bg-neutral-900 dark:border-gray-700 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20' : 'w-64'} hidden md:block h-[97vh] flex flex-col justify-between`}
        >
            <div className="p-4 flex justify-between items-center">
                <h2 className={`font-bold text-xl text-gray-800 dark:text-white ${isCollapsed ? 'hidden' : 'block'}`}>
                    Logo
                </h2>
                <Button variant="ghost" size="icon" onClick={toggleCollapse}>
                    {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </Button>
            </div>
            <Separator className="dark:bg-gray-700" />
            
            {/* Sección de navegación General */}
            <nav className="py-4 mx-2 flex-grow">
                <ul>
                    <li className="mb-2">
                        {/* Título de la sección General siempre visible */}
                        <h3 className={`text-sm font-semibold text-gray-500 dark:text-gray-400`}>General</h3>
                    </li>
                    {generalNavItems.map((item) => (
                        <li key={item.id} className="mb-2">
                            <button
                                onClick={() => setCurrentPage(item.id)} // Cambiar solo el estado, no la URL
                                aria-label={item.name}
                                className={`flex items-center w-full p-2 rounded ${
                                    currentPage === item.id ? 'bg-gray-700' : 'hover:bg-gray-700'
                                } ${isCollapsed ? 'justify-center' : ''}`}
                            >
                                <item.icon className="mr-2" size={20} />
                                {/* Mostrar el texto solo si no está colapsado */}
                                {!isCollapsed && item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <Separator className="dark:bg-gray-700" />

            {/* Sección de navegación Otros */}
            <nav className="py-4 mx-2 flex-grow">
                <ul>
                    <li className="mb-2">
                        {/* Título de la sección Otros siempre visible */}
                        <h3 className={`text-sm font-semibold text-gray-500 dark:text-gray-400`}>Otros</h3>
                    </li>
                    {otherNavItems.map((item) => (
                        <li key={item.id} className="mb-2">
                            <button
                                onClick={() => setCurrentPage(item.id)} // Cambiar solo el estado, no la URL
                                aria-label={item.name}
                                className={`flex items-center w-full p-2 rounded ${
                                    currentPage === item.id ? 'bg-gray-700' : 'hover:bg-gray-700'
                                } ${isCollapsed ? 'justify-center' : ''}`}
                            >
                                <item.icon className="mr-2" size={20} />
                                {/* Mostrar el texto solo si no está colapsado */}
                                {!isCollapsed && item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
