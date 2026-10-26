import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "JOEL DÍAZ QUINTO",
  EMAIL: "personaljdq@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Joel Díaz Quinto | QA Engineer & Systems Engineer",
  DESCRIPTION: "Portafolio profesional de Joel Díaz Quinto. Proyectos de QA, pruebas funcionales y de API, soporte de TI e ingeniería en sistemas.",
};

/*export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};*/

export const WORK: Metadata = {
  TITLE: "Trabajos",
  DESCRIPTION: "Dónde he trabajado y qué he hecho.",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION: "Una recopilación de mis proyectos, con enlaces a repositorios y demostraciones.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/Joel-DQ"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/joel-díaz-quinto-261830285/",
  }
];
