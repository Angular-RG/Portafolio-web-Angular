import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { staggerFade } from 'src/app/animations/animations';
import { IconSize } from 'src/app/constants/icon-size.constants';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';
import { Technology } from 'src/app/shared/interfaces/enhanced-portfolio.interfaces';

@Component({
  selector: 'app-technologies-section',
  templateUrl: './technologies-section.component.html',
  styleUrls: ['./technologies-section.component.scss'],
  animations: [
    staggerFade
  ]
})
export class TechnologiesSectionComponent {

  inView : boolean = false;
  @ViewChild('techUsed') techUsed: ElementRef | undefined;

  colors = HeadingColors.DEFAULT_GRADIENT
  sizeXXL = IconSize.XXL;

  technologies: Technology[] = [
    {
      id: 1,
      nombre: 'Angular',
      iconType: 'ANGULAR',
      categoria: 'Frontend',
      proficiency: 95,
      color: '#DD0031',
      yearsExperience: 4,
      featured: true,
      description: 'Framework principal para desarrollo frontend'
    },
    {
      id: 2,
      nombre: 'TypeScript',
      iconType: 'TYPESCRIPT',
      categoria: 'Frontend',
      proficiency: 90,
      color: '#3178C6',
      yearsExperience: 4,
      featured: true,
      description: 'Superset tipado de JavaScript'
    },
    {
      id: 3,
      nombre: 'Spring Boot',
      iconType: 'SPRING_BOOT',
      categoria: 'Backend',
      proficiency: 88,
      color: '#6DB33F',
      yearsExperience: 3,
      featured: true,
      description: 'Framework Java para microservicios'
    },
    {
      id: 4,
      nombre: 'Java',
      iconType: 'JAVA',
      categoria: 'Backend',
      proficiency: 85,
      color: '#ED8B00',
      yearsExperience: 3,
      featured: true,
      description: 'Lenguaje de programación orientado a objetos'
    },
    {
      id: 5,
      nombre: 'Tailwind CSS',
      iconType: 'TAILWINDCSS',
      categoria: 'Frontend',
      proficiency: 80,
      color: '#38B2AC',
      yearsExperience: 2,
      featured: false,
      description: 'Framework CSS utility-first'
    },
    {
      id: 6,
      nombre: 'Node.js',
      iconType: 'NODEJS',
      categoria: 'Backend',
      proficiency: 75,
      color: '#339933',
      yearsExperience: 2,
      featured: false,
      description: 'Runtime de JavaScript para servidor'
    },
    {
      id: 7,
      nombre: 'Oracle',
      iconType: 'ORACLE',
      categoria: 'Database',
      proficiency: 82,
      color: '#F80000',
      yearsExperience: 3,
      featured: true,
      description: 'Sistema de gestión de base de datos relacional'
    },
    {
      id: 8,
      nombre: 'PostgreSQL',
      iconType: 'POSTGRESQL',
      categoria: 'Database',
      proficiency: 78,
      color: '#336791',
      yearsExperience: 2,
      featured: true,
      description: 'Base de datos relacional de código abierto'
    },
    {
      id: 9,
      nombre: 'MongoDB',
      iconType: 'MONGODB',
      categoria: 'Database',
      proficiency: 70,
      color: '#47A248',
      yearsExperience: 1,
      featured: false,
      description: 'Base de datos NoSQL orientada a documentos'
    },
    {
      id: 10,
      nombre: 'AWS',
      iconType: 'AWS',
      categoria: 'Cloud',
      proficiency: 65,
      color: '#FF9900',
      yearsExperience: 2,
      featured: true,
      description: 'Plataforma de servicios en la nube'
    },
    {
      id: 11,
      nombre: 'Git',
      iconType: 'GIT',
      categoria: 'Tools',
      proficiency: 90,
      color: '#F05032',
      yearsExperience: 4,
      featured: false,
      description: 'Sistema de control de versiones distribuido'
    },
    {
      id: 12,
      nombre: 'Docker',
      iconType: 'DOCKER',
      categoria: 'Tools',
      proficiency: 72,
      color: '#2496ED',
      yearsExperience: 2,
      featured: false,
      description: 'Plataforma de contenedores'
    }
  ];

  // Filtros por categoría
  categories = ['Todas', 'Frontend', 'Backend', 'Database', 'Tools', 'Cloud'];
  selectedCategory = 'Todas';

  get filteredTechnologies(): Technology[] {
    if (this.selectedCategory === 'Todas') {
      return this.technologies;
    }
    return this.technologies.filter(tech => tech.categoria === this.selectedCategory);
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  trackByTechnology(index: number, tech: Technology): number {
    return tech.id;
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.techUsed && this.techUsed.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }

}
