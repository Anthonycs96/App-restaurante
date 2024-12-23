'use client'
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null); // Mantener el estado del tema

  useEffect(() => {
    // Verifica el tema del sistema y la preferencia almacenada en localStorage
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Establecer el tema basado en la preferencia o el almacenado
    const themeToApply = savedTheme || (prefersDarkScheme ? 'dark' : 'light');
    setTheme(themeToApply);
    document.body.classList.add(themeToApply); // Aplica el tema inmediatamente
  }, []);

  useEffect(() => {
    if (theme) {
      // Cuando el tema cambia, lo aplica al body y lo guarda en localStorage
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);
      localStorage.setItem('theme', theme); // Guarda la preferencia del tema
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
