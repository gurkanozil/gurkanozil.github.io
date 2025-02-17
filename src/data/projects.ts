import { Project } from "../types";

import RanaKaya from "../images/ranakaya_portfolio.png";
import badger_os from "../images/badger_os.png";
import cat_app from "../images/cat_app.png";
import tire_inventory from "../images/tire_inventory.png";

// id: num; // order of projects, unique
// title: "string",
// description: "string",
// github: "url", // optional
// liveLink: "url", // optional
// technologies: ["array", "with", "tech"], // optional
// image: "url"

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "This website was designed by Rana Kaya in Figma and developed by me using Vite, React.js and TailwindCSS.",
    github: "https://github.com/gurkanozil/ranakaya",
    liveLink: "https://ranakaya.vercel.app/",
    technologies: [
      "Figma",
      "React",
      "TailwindCSS",
      "Vercel",
      "Netlify",
      "Vite",
    ],
    image: RanaKaya,
  },
  {
    id: 2,
    title: "Badger2040 GM_OS",
    description:
      "The Badger2040 is a microcontroller with an e-ink display, based on the RP2040 microchip. In this project i decided to code some custom applications.",
    github: "https://github.com/gurkanozil/Badger2040",
    technologies: ["MicroPython", "IoT"],
    image: badger_os,
  },
  {
    id: 3,
    title: "Cat mobile app",
    description:
      "A mobile app with animations of our two cats, Huzur and Zeytin.",
    github: "https://github.com/gurkanozil/Cat-showcase-mobile-app",
    liveLink: "https://snack.expo.dev/@gurkanozil/cat-showcase-app",
    technologies: ["React Native", "TypeScript", "Expo"],
    image: cat_app,
  },
  {
    id: 4,
    title: "Tire inventory",
    description:
      "With user authentication, an inventory webapp to keep track of tires.",
    github: "https://github.com/gurkanozil/tire-inventory",
    liveLink: "https://gurkanozil.github.io/tire-inventory",
    technologies: ["Vite", "React", "Typescript", "FireBase / FireStore"],
    image: tire_inventory,
  },
];
