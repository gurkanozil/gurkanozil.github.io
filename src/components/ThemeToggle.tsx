import React, { useMemo } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Memoize the isDark calculation
  const isDark = useMemo(() => theme === "dark", [theme]);

  // Memoize class names for Sun and Moon icons
  const sunClass = useMemo(
    () =>
      `absolute inset-0 text-slate-700 transition-opacity duration-200 ${
        isDark ? "opacity-0" : "opacity-100"
      }`,
    [isDark]
  );

  const moonClass = useMemo(
    () =>
      `absolute inset-0 text-slate-300 transition-opacity duration-200 ${
        isDark ? "opacity-100" : "opacity-0"
      }`,
    [isDark]
  );

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 w-10 h-10 p-2 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors duration-200 z-50"
      aria-label="Toggle between light and dark themes"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-full h-full">
        <Sun className={sunClass} aria-hidden={true} />
        <Moon className={moonClass} aria-hidden={true} />
      </div>
    </button>
  );
};
