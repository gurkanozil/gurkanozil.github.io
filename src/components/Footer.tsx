import React from "react";
import gm_white from "../images/gmwhite.png";
import gm_green from "../images/gmgreen.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center bg-gray-200 dark:bg-gray-800">
      <p className="text-gray-800 dark:text-gray-200 justify-center">
        &copy; {currentYear}
        <img
          className="h-10 px-2 inline dark:hidden"
          alt="logo"
          src={gm_green}
        />
        <img
          className="h-10 px-2 dark:inline hidden"
          alt="logo"
          src={gm_white}
        />Özil
      </p>
    </footer>
  );
};

export default Footer;
