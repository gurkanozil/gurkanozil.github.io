import { Project } from "../types";
import resume from "../../cv.pdf";

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
// image: "url" // optional

export const projects: Project[] = [
  {
    id: 1,
    title: "Digital Designer Portfolio",
    description:
      "This website was designed by Rana Kaya in Figma and developed by me. It currently serves as her portfolio and online resume. The code is shared with her permission.",
    github: "https://github.com/gurkanozil/ranakaya",
    liveLink: "https://ranakaya.vercel.app/",
    technologies: ["Figma", "React", "TailwindCSS", "Vite"],
    image: RanaKaya,
  },
  {
    id: 2,
    title: "Badger2040 GM_OS",
    description:
      "The Badger2040 is a microcontroller with an e-ink display, based on the RP2040 microchip. In this project i decided to code some custom applications for it. More info on github",
    github: "https://github.com/gurkanozil/Badger2040",
    technologies: ["MicroPython", "IoT", "Embedded"],
    image: badger_os,
  },
  {
    id: 3,
    title: "Cat mobile app",
    description:
      "A mobile app with animations of our two cats, Huzur and Zeytin. This was my first experience with React Native. A live 'snack' is viewable on the link below.",
    github: "https://github.com/gurkanozil/Cat-showcase-mobile-app",
    liveLink: "https://snack.expo.dev/@gurkanozil/cat-showcase-app",
    technologies: ["React Native", "TypeScript", "Expo"],
    image: cat_app,
  },
  {
    id: 4,
    title: "Tire inventory",
    description:
      "With user authentication, a basic database inventory web app to keep track of tires. This was my first experience with a serverless database like Google's FireBase and FireStore.",
    github: "https://github.com/gurkanozil/tire-inventory",
    liveLink: "https://gurkanozil.github.io/tire-inventory",
    technologies: ["Vite", "React", "Typescript", "FireBase / FireStore"],
    image: tire_inventory,
  },
  {
    id: 5,
    title: "Want to see more?",
    description:
      "Not all of my projects are shared online or finished. \n Contact me if you want to learn more or if you have something in mind!",
    technologies: [
      "TypeScript/JavaScript",
      "React.js",
      "Angular",
      "Vue.js",
      "PHP/Laravel",
      "And more",
      "(With or without frameworks)",
    ],
    resume: resume,
  },
];
