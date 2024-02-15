import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nestjs,
  mui,
  wildoasis,
  shapeshifter,
  funventure,
  threejs,
  iba,
  ibagroup,
  primeholding,
  htmlcss,
  js,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "IBA Bulgaria",
    icon: iba,
    iconBg: "#383E56",
    date: "June 2022 - August 2022",
    points: [
      "Developing and maintaining web applications using React, Angular and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "JS Software Engineer Intern",
    company_name: "Prime Holding",
    icon: primeholding,
    iconBg: "#E6DEDD",
    date: "April 2023 - Sep 2023",
    points: [
      "Developing and maintaining web applications using React and other related technologies.",
      "Collaborating with fellow interns, mentors and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const certificates = [
  {
    name: "Programming Fundamentals with JavaScript",
    company: "SoftUni",
    image: js,
  },
  {
    name: "HTML & CSS",
    company: "SoftUni",
    image: htmlcss,
  },
];

const projects = [
  {
    name: "The Wild Oasis",
    description:
      "A classy app for hotel staff to handle bookings for their fancy cabins.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: wildoasis,
    source_code_link: "https://github.com/Plamena37/the-wild-oasis",
  },
  {
    name: "Shape Shifter",
    description:
      "Web application that allows users to monitor their progress on exercises and body measurements.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: shapeshifter,
    source_code_link: "https://github.com/Plamena37/shape-shifter-frontend",
  },
  {
    name: "Funventure",
    description:
      "A comprehensive event booking platform that allows users to purchase tickets, and offers all kind of events.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: funventure,
    source_code_link: "https://github.com/Plamena37/Funventure",
  },
];

export { services, technologies, experiences, certificates, projects };
