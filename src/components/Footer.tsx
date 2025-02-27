import React, { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { Sparkles } from "../components/Sparkles";

import gm_white from "../images/gmwhite.png";
import gm_green from "../images/gmgreen.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const logo = theme === "dark" ? gm_white : gm_green;
  const logoClassName =
    theme === "dark" ? "hidden dark:inline" : "inline dark:hidden";
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisits = async () => {
      let baseUrl = "";
      let functionPath = "/.netlify/functions/visits"; // Default path

      if (window.location.hostname.includes("github.io")) {
        baseUrl = "https://gurkanozil.netlify.app";
      } else if (window.location.hostname.includes("vercel.app")) {
        functionPath = "/api/visits"; // Vercel path
      } else if (window.location.hostname === "localhost") {
        baseUrl = "http://localhost:5173";
      }

      try {
        // POST request
        console.log("Sending POST to:", `${baseUrl}${functionPath}`);
        await fetch(`${baseUrl}${functionPath}`, { method: "POST" });

        // GET request
        console.log("Sending GET to:", `${baseUrl}${functionPath}`);
        const res = await fetch(`${baseUrl}${functionPath}`);
        const data = await res.json();

        if (data && typeof data.visits === "number") {
          setVisits(data.visits);
        } else {
          console.error("Unexpected response from visits endpoint:", data);
          setVisits(0);
        }
      } catch (error) {
        console.error("Failed to fetch visits:", error);
        setVisits(0);
      }
    };

    fetchVisits();
  }, []);

  return (
    <footer className="py-4 text-center bg-gray-200 dark:bg-gray-800">
      <Sparkles
        className="h-10 absolute inset-x-0 opacity-100"
        color={theme === "dark" ? "#FFFFFF" : "#000000"}
        density={theme === "dark" ? 1000 : 500}
      />
      <p className="text-gray-800 text-xl md:text-2xl dark:text-gray-200 justify-center">
        {/* Display current year and logo */}
        &copy; {currentYear}{" "}
        <img
          className={`h-12 md:h-16 pt-1 p-2 ${logoClassName}`}
          alt="logo"
          src={logo}
        />{" "}
        Özil
      </p>
      {/* Display visitor count if available */}
      {visits !== null && (
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
          Visitors: {visits}
        </p>
      )}
    </footer>
  );
};

export default Footer;
