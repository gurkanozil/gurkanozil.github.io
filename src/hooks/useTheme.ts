import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    // Add a transitioning class
    root.classList.add("theme-transitioning");
    root.classList.add(theme);

    // Remove the transitioning class after the animation completes
    const timeout = setTimeout(() => {
      root.classList.remove("theme-transitioning");
    }, 200); // Match this duration with your CSS transition

    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
