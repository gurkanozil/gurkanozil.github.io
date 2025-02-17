import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 w-10 h-10 p-2 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors duration-600"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="text-slate-300" />
      ) : (
        <Moon className="text-slate-700" />
      )}
    </button>
  );
};