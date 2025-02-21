import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 w-10 h-10 p-2 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full">
        <Sun
          className={`${
            isDark ? "opacity-0" : "opacity-100"
          } absolute inset-0 text-slate-700 transition-opacity duration-200`}
        />
        <Moon
          className={`${
            isDark ? "opacity-100" : "opacity-0"
          } absolute inset-0 text-slate-300 transition-opacity duration-200`}
        />
      </div>
    </button>
  );
};
