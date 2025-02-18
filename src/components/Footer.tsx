import React from "react";
import { useTheme } from "../hooks/useTheme";
import { Sparkles } from "../components/Sparkles";

import gm_white from "../images/gmwhite.png";
import gm_green from "../images/gmgreen.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="py-4 text-center bg-gray-200 dark:bg-gray-800">
      {theme === "dark" ? (
        <Sparkles
          className="h-10 absolute inset-x-0 opacity-100"
          color="#FFFFFF"
          density={1000}
        />
      ) : (
        <Sparkles
          className="h-10 absolute inset-x-0 opacity=100"
          color="#000000"
          density={500}
        />
      )}
      <p className="text-gray-800 text-xl md:text-2xl dark:text-gray-200 justify-center">
        &copy; {currentYear}
        <img
          className="h-12 md:h-16 p-2 inline dark:hidden"
          alt="logo"
          src={gm_green}
        />
        <img
          className="h-12 md:h-16 p-2 hidden dark:inline"
          alt="logo"
          src={gm_white}
        />Özil
      </p>
    </footer>
  );
};

export default Footer;
