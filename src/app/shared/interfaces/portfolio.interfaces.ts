// Interfaces mejoradas para el portafolio

export interface Technology {
  name: string;
  iconType: string;
  url: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: number; // 1-100
  description?: string;
  yearStarted?: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'Gobierno Digital' | 'Sistemas Municipales' | 'APIs' | 'Web Apps';
  startDate?: Date;
  endDate?: Date;
  teamSize?: number;
  myRole?: string;
  architecture: 'Monolítica' | 'Microservicios' | 'Hexagonal';
  status: 'Completado' | 'En Desarrollo' | 'Mantenimiento';
  isPrivate: boolean;
  impact?: string; // Descripción del impacto del proyecto
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  rating: number; // 1-5
  featured: boolean;
  date: Date;
  linkedInUrl?: string;
  projectRelated?: string; // Proyecto relacionado al testimonio
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date; // undefined si es trabajo actual
  description: string;
  technologies: string[];
  achievements: string[];
  location: string;
  type: 'Tiempo Completo' | 'Freelance' | 'Contrato';
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  gpa?: number;
  achievements?: string[];
  relevant_coursework?: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: Date;
  expirationDate?: Date;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Soft Skills';
  yearsOfExperience: number;
}

// Enums para consistencia
export enum ProjectStatus {
  COMPLETED = 'Completado',
  IN_DEVELOPMENT = 'En Desarrollo',
  MAINTENANCE = 'Mantenimiento'
}

export enum Architecture {
  MONOLITHIC = 'Monolítica',
  MICROSERVICES = 'Microservicios',
  HEXAGONAL = 'Hexagonal'
}

export enum SkillLevel {
  BEGINNER = 'Principiante',
  INTERMEDIATE = 'Intermedio',
  ADVANCED = 'Avanzado',
  EXPERT = 'Experto'
}

// Utilidades de mapeo
export class SkillUtils {
  static getSkillLevelFromPercentage(percentage: number): SkillLevel {
    if (percentage >= 90) return SkillLevel.EXPERT;
    if (percentage >= 75) return SkillLevel.ADVANCED;
    if (percentage >= 50) return SkillLevel.INTERMEDIATE;
    return SkillLevel.BEGINNER;
  }

  static getSkillColor(level: SkillLevel): string {
    const colors = {
      [SkillLevel.BEGINNER]: 'text-yellow-400',
      [SkillLevel.INTERMEDIATE]: 'text-blue-400',
      [SkillLevel.ADVANCED]: 'text-green-400',
      [SkillLevel.EXPERT]: 'text-purple-400'
    };
    return colors[level];
  }
}
