import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 w-10 h-10 p-2 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full">
        <Sun 
          className={`absolute inset-0 transform transition-all duration-200 
            ${theme === 'dark' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'} 
            text-slate-300`}
        />
        <Moon 
          className={`absolute inset-0 transform transition-all duration-200 
            ${theme === 'light' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'} 
            text-slate-700`}
        />
      </div>
    </button>
  );
};