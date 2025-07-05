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
    // FRONTEND - Tecnologías principales primero
    {
      id: 1,
      nombre: 'Angular',
      iconType: 'ANGULAR',
      categoria: 'Frontend',
      proficiency: 85,
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
      id: 21,
      nombre: 'PrimeNG',
      iconType: 'PRIME_NG',
      categoria: 'Frontend',
      proficiency: 85,
      color: '#DD0031',
      yearsExperience: 2,
      featured: true,
      description: 'Biblioteca de componentes UI para Angular'
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

    // BACKEND - Stack Spring primero, luego otros
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
      id: 17,
      nombre: 'Spring Security',
      iconType: 'SPRING_SECURITY',
      categoria: 'Backend',
      proficiency: 85,
      color: '#6AAD3D',
      yearsExperience: 3,
      featured: true,
      description: 'Framework de seguridad para aplicaciones Spring'
    },
    {
      id: 18,
      nombre: 'Spring Data',
      iconType: 'SPRING_DATA',
      categoria: 'Backend',
      proficiency: 82,
      color: '#6AAD3D',
      yearsExperience: 3,
      featured: true,
      description: 'Abstracción de acceso a datos en Spring'
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
      id: 16,
      nombre: 'Apache Kafka',
      iconType: 'APACHE_KAFKA',
      categoria: 'Backend',
      proficiency: 65,
      color: '#231F20',
      yearsExperience: 1,
      featured: false,
      description: 'Plataforma de streaming distribuido'
    },

    // DATABASE - Principales primero
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
      id: 15,
      nombre: 'Redis',
      iconType: 'REDIS',
      categoria: 'Database',
      proficiency: 72,
      color: '#D82C20',
      yearsExperience: 1,
      featured: true,
      description: 'Base de datos en memoria para cache y mensajería'
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

    // CLOUD
    {
      id: 10,
      nombre: 'AWS',
      iconType: 'AWS',
      categoria: 'Cloud',
      proficiency: 68,
      color: '#FF9900',
      yearsExperience: 2,
      featured: true,
      description: 'Plataforma de servicios en la nube'
    },

    // TOOLS - Herramientas más importantes primero
    {
      id: 19,
      nombre: 'Jira',
      iconType: 'JIRA',
      categoria: 'Tools',
      proficiency: 90,
      color: '#0052CC',
      yearsExperience: 4,
      featured: true,
      description: 'Herramienta de gestión de proyectos y seguimiento de issues'
    },
    {
      id: 11,
      nombre: 'Git',
      iconType: 'GIT',
      categoria: 'Tools',
      proficiency: 90,
      color: '#F05032',
      yearsExperience: 4,
      featured: true,
      description: 'Sistema de control de versiones distribuido'
    },
    {
      id: 14,
      nombre: 'SonarQube',
      iconType: 'SONARQUBE',
      categoria: 'Tools',
      proficiency: 80,
      color: '#4E9BCD',
      yearsExperience: 2,
      featured: true,
      description: 'Plataforma de análisis de calidad de código'
    },
    {
      id: 12,
      nombre: 'Docker',
      iconType: 'DOCKER',
      categoria: 'Tools',
      proficiency: 75,
      color: '#2496ED',
      yearsExperience: 2,
      featured: true,
      description: 'Plataforma de contenedores'
    },
    {
      id: 13,
      nombre: 'BI Publisher',
      iconType: 'BI_PUBLISHER',
      categoria: 'Tools',
      proficiency: 75,
      color: '#FF6B35',
      yearsExperience: 2,
      featured: false,
      description: 'Herramienta de Oracle para generación de reportes'
    },
    {
      id: 20,
      nombre: 'Slack',
      iconType: 'SLACK',
      categoria: 'Tools',
      proficiency: 70,
      color: '#E01E5A',
      yearsExperience: 3,
      featured: false,
      description: 'Plataforma de comunicación empresarial'
    }
  ];

  // Filtros por categoría y configuración UX/UI
  categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'Tools'];
  selectedCategory = 'All';

  // Vista por defecto: solo tecnologías destacadas para mejor UX
  showOnlyFeatured = true;

  // Control de paginación/lazy loading para mejorar performance
  itemsPerPage = 12;
  currentPage = 1;

  get filteredTechnologies(): Technology[] {
    let filtered = this.technologies;

    // Filtrar por categoría
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(tech => tech.categoria === this.selectedCategory);
    }

    // Filtrar por destacadas si está activado
    if (this.showOnlyFeatured) {
      filtered = filtered.filter(tech => tech.featured);
    }

    return filtered;
  }

  get paginatedTechnologies(): Technology[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredTechnologies.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredTechnologies.length / this.itemsPerPage);
  }

  get showPagination(): boolean {
    return this.filteredTechnologies.length > this.itemsPerPage;
  }

  // Contador de tecnologías por categoría para badges
  get categoryCount(): { [key: string]: number } {
    const count: { [key: string]: number } = {};
    this.categories.forEach(category => {
      if (category === 'All') {
        count[category] = this.showOnlyFeatured
          ? this.technologies.filter(t => t.featured).length
          : this.technologies.length;
      } else {
        const filtered = this.technologies.filter(t => t.categoria === category);
        count[category] = this.showOnlyFeatured
          ? filtered.filter(t => t.featured).length
          : filtered.length;
      }
    });
    return count;
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1; // Reset a primera página al cambiar filtro
  }

  toggleFeaturedView(): void {
    this.showOnlyFeatured = !this.showOnlyFeatured;
    this.currentPage = 1; // Reset a primera página al cambiar vista
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Método mejorado para ordenamiento dinámico
  sortTechnologies(criteria: 'proficiency' | 'experience' | 'name'): void {
    this.technologies.sort((a, b) => {
      switch (criteria) {
        case 'proficiency':
          return b.proficiency - a.proficiency;
        case 'experience':
          return b.yearsExperience - a.yearsExperience;
        case 'name':
          return a.nombre.localeCompare(b.nombre);
        default:
          return 0;
      }
    });
  }

  trackByTechnology(index: number, tech: Technology): number {
    return tech.id;
  }

  getCategoryTranslationKey(category: string): string {
    if (category.toLowerCase() === 'all') {
      return 'HOME.TECHNOLOGIES.CATEGORY_ALL';
    } else if (category === 'Frontend') {
      return 'HOME.TECHNOLOGIES.CATEGORY_FRONTEND';
    } else if (category === 'Backend') {
      return 'HOME.TECHNOLOGIES.CATEGORY_BACKEND';
    } else if (category === 'Database') {
      return 'HOME.TECHNOLOGIES.CATEGORY_DATABASE';
    } else if (category === 'Tools') {
      return 'HOME.TECHNOLOGIES.CATEGORY_TOOLS';
    } else if (category === 'Cloud') {
      return 'HOME.TECHNOLOGIES.CATEGORY_CLOUD';
    }
    return category;
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.techUsed && this.techUsed.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }

}
