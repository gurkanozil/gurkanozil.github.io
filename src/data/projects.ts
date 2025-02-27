import { Project } from "../types";

import RanaKaya from "../images/ranakaya_portfolio.webp";
import badger_os from "../images/badger_os.webp";
import cat_app from "../images/cat_app.webp";
import tire_inventory from "../images/tire_inventory.webp";
import crossy_roads from "../images/crossy-roads.webp";

export const projects: Project[] = [
  {
    id: 1,
    title: "Crossy Road Game with Three.js",
    description:
      "Basic Crossy Road Game clone built with Three.js. Currently optimized for development environment.",
    github: "https://github.com/gurkanozil/crossy-road-game",
    technologies: ["Vite", "Typescript", "Three.js"],
    image: crossy_roads,
  },
  {
    id: 2,
    title: "Digital Designer Portfolio",
    description:
      "Portfolio website for Digital Designer Rana Kaya, developed using React and TailwindCSS. Showcases her design skills and online resume.",
    github: "https://github.com/gurkanozil/ranakaya",
    liveLink: "https://ranakaya.vercel.app/",
    technologies: ["Figma", "React", "TailwindCSS", "Vite"],
    image: RanaKaya,
  },
  {
    id: 3,
    title: "Badger2040 Custom OS",
    description:
      "Custom applications for the Badger2040, a microcontroller with an e-ink display based on the RP2040. Demonstrates embedded systems and IoT development skills.",
    github: "https://github.com/gurkanozil/Badger2040",
    technologies: ["MicroPython", "IoT", "Embedded Systems", "RP2040"],
    image: badger_os,
  },
  {
    id: 4,
    title: "Interactive Cat Showcase Mobile App",
    description:
      "Mobile app featuring animations of cats Huzur and Zeytin. Built with React Native and Expo. Demonstrates mobile app development skills.",
    github: "https://github.com/gurkanozil/Cat-showcase-mobile-app",
    liveLink: "https://snack.expo.dev/@gurkanozil/cat-showcase-app",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Mobile App Development",
    ],
    image: cat_app,
  },
  {
    id: 5,
    title: "Tire Inventory Web Application",
    description:
      "Web application for managing tire inventory with user authentication. Built using Firebase and Firestore, showcasing serverless database skills.",
    github: "https://github.com/gurkanozil/tire-inventory",
    liveLink: "https://gurkanozil.github.io/tire-inventory",
    technologies: ["Typescript", "FireBase / FireStore"],
    image: tire_inventory,
  },
  {
    id: 6,
    title: "Explore More Projects",
    description:
      "Interested in seeing more? Contact me to learn about other projects and collaborations.",
    technologies: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Angular",
      "Vue.js",
      "PHP",
      "Laravel",
      "Web Development",
      "And more",
    ],
    //resume: resume,
  },
];
