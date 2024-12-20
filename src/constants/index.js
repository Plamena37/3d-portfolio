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
  reactquery,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nestjs,
  mui,
  wildoasis,
  shapeshifter,
  shapeshifterBE,
  funventure,
  evogym,
  threejs,
  ibagroup,
  primeholding,
  alphabite,
  htmlcss,
  js,
  sass,
  styledcomponents,
  firebase,
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
    title: "JavaScript Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
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
    name: "Sass",
    icon: sass,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Junior Developer",
    company_name: "Alpha Bite",
    icon: alphabite,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Creating a dynamic and responsive interface with technologies such as next.js, typescript, shadcn ui",
      "Building scalable server-side applications using nestjs and prisma.",
      "I also work with React Native to expand my mobile development skills",
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
  {
    title: "Software Developer",
    company_name: "IBA Bulgaria",
    icon: ibagroup,
    iconBg: "#383E56",
    date: "June 2022 - August 2022",
    points: [
      "Developing and maintaining web applications using React, Angular and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const certificates = [
  {
    name: "Programming Fundamentals with JavaScript",
    company: "SoftUni",
    credentials: "https://softuni.bg/certificates/details/139188/bd7152f6",
    image: js,
  },
  {
    name: "HTML & CSS",
    company: "SoftUni",
    credentials: "https://softuni.bg/certificates/details/127522/c7c1ceed",
    image: htmlcss,
  },
];

const projects = [
  // {
  //   name: "The Wild Oasis",
  //   description:
  //     "A classy app for hotel staff to handle bookings for their small boutique hotel with 8 luxurious wooden cabins.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "styled-components",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: wildoasis,
  //   source_code_link: "https://github.com/Plamena37/the-wild-oasis",
  //   demo_link: "https://the-wild-oasis-six-eta.vercel.app/",
  // },
  {
    name: "Shape Shifter FE",
    description:
      "Web application that allows users to monitor their progress on exercises and body measurements.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: shapeshifter,
    source_code_link: "https://github.com/Plamena37/shape-shifter-frontend",
    demo_link: "https://plamena-shape-shifter.netlify.app/",
  },
  {
    name: "Shape Shifter BE",
    description:
      "Web application that allows users to monitor their progress on exercises and body measurements.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb-atlas",
        color: "pink-text-gradient",
      },
    ],
    image: shapeshifterBE,
    source_code_link: "https://github.com/Plamena37/shape-shifter-backend",
    demo_link: "https://plamena-shape-shifter.netlify.app/",
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
    demo_link: "https://funventure.netlify.app/",
  },
  {
    name: "EvoGym",
    description:
      "A world class fitness equipment, trainers and classess to get you to your ultimate fitness goals with ease.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: evogym,
    source_code_link: "https://github.com/Plamena37/Evo-Gym",
    demo_link: "https://evogym-plamena.netlify.app/",
  },
];

const emailjsData = {
  emailjs_service_id: "service_h4eb8rn",
  emailjs_template_id: "template_antfzfb",
  emailjs_public_key: "P6QLqZBe2rdxv9zUE",
};

const socialLinks = {
  github: "https://github.com/Plamena37",
  linkedin: "https://www.linkedin.com/in/plamena-ivanova-3b6782239/",
};

export {
  services,
  technologies,
  experiences,
  certificates,
  projects,
  emailjsData,
  socialLinks,
};
