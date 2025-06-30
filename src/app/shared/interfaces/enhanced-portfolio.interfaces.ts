// Interfaz para tecnologías mejorada
export interface Technology {
  id: number;
  nombre: string;
  categoria: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Cloud';
  proficiency: number; // 1-100
  iconType: string;
  color: string;
  yearsExperience: number;
  description?: string;
  certifications?: string[];
  featured: boolean;
}

// Interfaz para proyectos (compatible con la existente)
export interface ProjectTechnology {
  nombre: string;
  logo: string;
}

export interface ProjectCards {
  projectImg: string;
  projectName: string;
  projectDescription: string;
  isProjectLinkPresent: boolean;
  projectLiveLink: string;
  isProjectGithubLinkPresent: boolean;
  projectGithubLink?: string;
  isOpenSource: boolean;
  freelance: boolean;
  arquitectura: string;
  tecnologias: ProjectTechnology[];
}

// Enum para arquitecturas
export enum Arquitectura {
  MONO = 'Monolítica',
  MICRO = 'Microservicios',
  HEX = 'Hexagonal'
}

// Interfaz para testimonios mejorada
export interface TestimonialData {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  rating: number;
  featured: boolean;
  date: Date;
  linkedInUrl?: string;
}
