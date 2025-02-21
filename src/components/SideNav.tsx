import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  onClick: () => void;
}

export const SideNav: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    const elementsToObserve = items
      .map((item) => document.getElementById(item.id))
      .filter((element) => element !== null) as Element[];
    elementsToObserve.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [items]);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-20 top-1/3 -translate-y-1/2 hidden md:flex flex-col gap-6 z-50"
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={item.onClick}
          className={`group flex items-center gap-3 transition-all duration-300 ${
            activeSection === item.id ? "translate-x-2" : ""
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-emerald-500 scale-150"
                : "bg-gray-400 dark:bg-gray-600 group-hover:bg-emerald-400"
            }`}
          />
          <span
            className={`text-2xl font-medium transition-all duration-300 ${
              activeSection === item.id
                ? "text-emerald-500 opacity-100"
                : "text-gray-400 dark:text-gray-600 opacity-80 group-hover:opacity-100 group-hover:text-emerald-400"
            }`}
          >
            {item.label}
          </span>
        </button>
      ))}
    </motion.nav>
  );
};
