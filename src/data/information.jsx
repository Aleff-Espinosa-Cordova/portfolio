// src\data\information.jsx


import {
  FaComments as CommunicationIcon,
  FaUsers as TeamworkIcon,
  FaLightbulb as LeadershipIcon,
  FaPalette as CreativityIcon,
  FaCogs as ProblemSolvingIcon,
  FaSyncAlt as AdaptabilityIcon,
  FaClock as TimeManagementIcon,
  FaBrain as CriticalThinkingIcon,
} from "react-icons/fa";

import {
  FaJs as JavascriptIcon,
  FaPython as PythonIcon,
  FaPhp as PHPIcon,
  FaJava as JavaIcon,
  FaGithub as GitHubIcon,
  FaGitlab as GitLabIcon,
  FaNodeJs as NodejsIcon,
  FaDocker as DockerIcon,
  FaLinux as LinuxIcon,
  FaDatabase as SqlIcon,
  FaCss3 as CSSIcon,
  FaReact as ReactIcon,
  FaBootstrap as BootstrapIcon,
  FaLaravel as LaravelIcon,
  FaWindows as WindowsIcon,
  FaBitbucket as BitbucketIcon,
} from "react-icons/fa";

import {
  RiTailwindCssFill as TailwindIcon
} from "react-icons/ri";

export const words = [
  "Ingeniero de software!",
  "Desarrollador web!",
  "Desarrollador Full-Stack!",
  "(⌐■_■)"
];

export const technicalSkills = [
  {
    name: "JavaScript",
    icon: <JavascriptIcon className="w-8 h-8" />,
    level: "95%",
    category: "language",
  },
  {
    name: "Python",
    icon: <PythonIcon className="w-8 h-8" />,
    level: "95%",
    category: "language",
  },
  {
    name: "PHP",
    icon: <PHPIcon className="w-8 h-8" />,
    level: "80%",
    category: "language",
  },
  {
    name: "Java",
    icon: <JavaIcon className="w-8 h-8" />,
    level: "70%",
    category: "language",
  },
  {
    name: "GitHub",
    icon: <GitHubIcon className="w-8 h-8" />,
    level: "90%",
    category: "tool",
  },
  {
    name: "GitLab",
    icon: <GitLabIcon className="w-8 h-8" />,
    level: "90%",
    category: "tool",
  },
  {
    name: "Node.js",
    icon: <NodejsIcon className="w-8 h-8" />,
    level: "80%",
    category: "technology",
  },
  {
    name: "Docker",
    icon: <DockerIcon className="w-8 h-8" />,
    level: "90%",
    category: "technology",
  },
  {
    name: "Linux",
    icon: <LinuxIcon className="w-8 h-8" />,
    level: "90%",
    category: "os",
  },
  {
    name: "SQL",
    icon: <SqlIcon className="w-8 h-8" />,
    level: "90%",
    category: "technology",
  },
  {
    name: "CSS",
    icon: <CSSIcon className="w-8 h-8" />,
    level: "75%",
    category: "technology",
  },
  {
    name: "React",
    icon: <ReactIcon className="w-8 h-8" />,
    level: "85%",
    category: "framework",
  },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon className="w-8 h-8" />,
    level: "75%",
    category: "framework",
  },
  {
    name: "Laravel",
    icon: <LaravelIcon className="w-8 h-8" />,
    level: "80%",
    category: "framework",
  },
  {
    name: "MySQL",
    icon: <SqlIcon className="w-8 h-8" />,
    level: "80%",
    category: "technology",
  },
  {
    name: "Windows",
    icon: <WindowsIcon className="w-8 h-8" />,
    level: "100%",
    category: "os",
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon className="w-8 h-8" />,
    level: "75%",
    category: "technology",
  },
  {
    name: "Bitbucket",
    icon: <BitbucketIcon className="w-8 h-8" />,
    level: "80%",
    category: "tool",
  },
];

export const softSkills = [
  { name: "Comunicación", icon: <CommunicationIcon className="w-8 h-8" /> },
  { name: "Trabajo en equipo", icon: <TeamworkIcon className="w-8 h-8" /> },
  { name: "Liderazgo", icon: <LeadershipIcon className="w-8 h-8" /> },
  { name: "Creatividad", icon: <CreativityIcon className="w-8 h-8" /> },
  {
    name: "Resolución de problemas",
    icon: <ProblemSolvingIcon className="w-8 h-8" />,
  },
  { name: "Adaptabilidad", icon: <AdaptabilityIcon className="w-8 h-8" /> },
  {
    name: "Gestión del tiempo",
    icon: <TimeManagementIcon className="w-8 h-8" />,
  },
  {
    name: "Pensamiento crítico",
    icon: <CriticalThinkingIcon className="w-8 h-8" />,
  },
];

export const categories = [
  { name: "Todo", key: "" },
  { name: "Lenguajes", key: "language" },
  { name: "Tecnologías", key: "technology" },
  { name: "Frameworks", key: "framework" },
  { name: "Sistemas Operativos", key: "os" },
  { name: "Herramientas", key: "tool" },
];

export const experience = [
  {
    title: 'Bitters hashtag waistcoat fashion axe chia unicorn',
    date: '12 Jun 2019',
    description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
  },
  {
    title: 'Meditation bushwick direct trade taxidermy shaman',
    date: '12 Jun 2019',
    description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
  },
  {
    title: 'Woke master cleanse drinking vinegar salvia',
    date: '12 Jun 2019',
    description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
  }
];

export const projects = [
  {
    title: 'Proyecto de Inteligencia Artificial',
    description: 'Desarrollo de un sistema de reconocimiento facial utilizando redes neuronales y aprendizaje profundo. Implementado en Python con TensorFlow y Keras.',
    imageUrl: '/images/ai_project.png',
    link: 'https://github.com/usuario/ai_project',
    category: 'Inteligencia Artificial'
  },
  {
    title: 'Sitio Web de E-commerce',
    description: 'Creación de una plataforma de comercio electrónico con integración de pagos, carritos de compras, y administración de productos. Desarrollado con React, Node.js, y MongoDB.',
    imageUrl: '/images/ecommerce.png',
    link: 'https://github.com/usuario/ecommerce_project',
    category: 'Desarrollo Web'
  },
  {
    title: 'Aplicación de Gestión de Tareas',
    description: 'Aplicación multiplataforma para la gestión de tareas diarias. Incluye funcionalidades de notificación, categorización de tareas, y sincronización en la nube. Desarrollado con Flutter y Firebase.',
    imageUrl: '/images/task_manager.png',
    link: 'https://github.com/usuario/task_manager',
    category: 'Aplicaciones Móviles'
  },
  {
    title: 'Sistema de Control de Versiones Personalizado',
    description: 'Desarrollo de un sistema de control de versiones ligero para proyectos pequeños y medianos. Implementado en Python con un enfoque en simplicidad y eficiencia.',
    imageUrl: '/images/version_control.png',
    link: 'https://github.com/usuario/version_control',
    category: 'Herramientas de Desarrollo'
  },
  {
    title: 'Portfolio Personal',
    description: 'Mi sitio web personal que presenta mi trayectoria profesional, proyectos destacados y habilidades. Desarrollado con Next.js y Tailwind CSS.',
    imageUrl: '/images/portfolio.png',
    link: 'https://miportfolio.com',
    category: 'Desarrollo Web'
  }
];