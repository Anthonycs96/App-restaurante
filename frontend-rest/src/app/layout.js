import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi Aplicación con Sidebar Responsivo',
  description: 'Una aplicación Next.js con un sidebar responsivo y navegación móvil',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <ThemeProvider>
        <body className={`${inter.className} antialiased bg-white dark:bg-neutral-800 text-gray-800 dark:text-white transition-all duration-300 ease-in-out min-h-screen p-4`}>
          {/* Asegúrate de que el children ocupe el 100% del espacio disponible */}
          <div className="flex flex-col h-full">
            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
