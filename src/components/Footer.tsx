import React, { useMemo } from "react";
import { useTheme } from "../hooks/useTheme";
import { Sparkles } from "../components/Sparkles";

import gm_white from "../images/gmwhite.webp";
import gm_green from "../images/gmgreen.webp";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const logo = useMemo(() => (theme === "dark" ? gm_white : gm_green), [theme]);
  const logoClassName = useMemo(
    () => (theme === "dark" ? "hidden dark:inline" : "inline dark:hidden"),
    [theme]
  );
  const sparklesColor = useMemo(
    () => (theme === "dark" ? "#FFFFFF" : "#000000"),
    [theme]
  );
  const sparklesDensity = useMemo(
    () => (theme === "dark" ? 1000 : 500),
    [theme]
  );

  return (
    <footer className="py-4 text-center bg-gray-200 dark:bg-gray-800">
      <Sparkles
        className="h-10 absolute inset-x-0 opacity-100"
        color={sparklesColor}
        density={sparklesDensity}
      />
      <p className="text-gray-800 text-xl md:text-2xl dark:text-gray-200 justify-center">
        &copy; {currentYear}{" "}
        <img
          className={`h-12 md:h-16 pt-1 p-2 ${logoClassName}`}
          alt="Gurkan Ozil Logo"
          src={logo}
        />{" "}
        Özil
      </p>
    </footer>
  );
};

export default Footer;
