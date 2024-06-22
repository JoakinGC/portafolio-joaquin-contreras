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
  figma,
  docker,
  carrent,
  tripguide,
  threejs,
  nextJs,
  java,
  mysql,
  bootstrap,
  spring,
  php,
  hibernate,
  tensorFlow,
  python,
  cypress,
  jest,
  wordPress,
  kotlin,
  powerBI,
  imc1,
  pawCare,
  library,
  intecWeb,
  intecCompanian
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "navBar1",
  },
  {
    id: "work",
    title: "navBar2",
  },
  {
    id: "contact",
    title: "navBar3",
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
    title: "Marketing and Creator Content",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Power BI",
    icon: powerBI,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "wordPress",
    icon: wordPress,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Hibernate",
    icon: hibernate,
  },
  {
    name: "TensorFlow",
    icon: tensorFlow,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Next JS",
    icon: nextJs,
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
    name: "Node JS",
    icon: nodejs,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];




const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Saas Posdcast",
    description:
      "desc4",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    link:"#"
  },
  {
    name: "Paw Care - Veterinary System",
    description:
      "desc5",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "cypress",
        color: "text-stone-400",
      },
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "text-violet-400",
      },
      {
        name: "mysql",
        color: "text-blue-400",
      },
      {
        name: "redux",
        color: "text-violet-400",
      },  
      {
        name: "tensorflow",
        color: "text-orange-400",
      }, 
      {
        name: "docker",
        color: "text-cyan-400",
      }, 
      {
        name: "hibernate",
        color: "text-teal-300",
      }, 
      {
        name: "Svelte kit",
        color: "text-orange-500",
      },
    ],
    image: pawCare,
    source_code_link: "https://github.com/JoakinGC/System-Paw-care",
    link:"#"
  },
  {
    name: "Library App",
    description:
      "desc6",
    tags: [
      {
        name: "JUnit",
        color: "blue-text-gradient",
      },
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "thymeleaf",
        color: "green-text-gradient",
      },
      {
        name: "javadocs",
        color: "text-sky-400",
      },
    ],
    image: library,
    source_code_link: "https://github.com/JoakinGC/library-system",
    link:"https://library-system-8hhk.onrender.com"
  },
  {
    name: "BMI App",
    description:
      "desc7",
    tags: [
      {
        name: "XML",
        color: "text-orange-400",
      },
      {
        name: "kotlin",
        color: "green-text-gradient",
      },
    ],
    image: imc1,
    source_code_link: "https://github.com/JoakinGC/IMC-Aplication",
    link:"#"
  },
  {
    name: "Pet Recognition AI",
    description:
      "desc8",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "text-orange-400",
      },
    ],
    image: tripguide,
    source_code_link: "https://colab.research.google.com/drive/1yZXtry7UxneHkljEQiOoI0V7X8afKUuv?usp=sharing",
    link:"#"
  },
];

const experience = [
  {
    id: 1,
    title: "Next.js Web Application for Intec Robots",
    img: intecWeb,
    desc: "desc1",
    link: "https://www.youtube.com/watch?v=FUG6aFM8jdk",
    linkGitHub: "https://github.com/IntecRobots"
  },
  {
    id: 2,
    title: "React Native Application",
    img: intecCompanian,
    desc: "desc2",
    link: "https://www.youtube.com/watch?v=FUG6aFM8jdk",
    linkGitHub: "https://github.com/IntecRobots"
  },
  {
    id: 3,
    title: "Kotlin Application for Robot Control",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "desc3",
    link: "https://www.youtube.com/watch?v=FUG6aFM8jdk",
    linkGitHub: "https://github.com/IntecRobots"
  },
];

const languages = [
  {
    id:navLinks.length+1,
    value:"es",
  },
  {
    id:navLinks.length+2,
    value:"en",
  },
]

export { services, technologies,  testimonials, projects,experience,languages};
