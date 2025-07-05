import { Component, ElementRef, HostListener, OnInit, ViewChildren } from '@angular/core';
import { fadeInView } from 'src/app/animations/animations';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { HeadingColors } from 'src/app/shared/heading/heading-color.model';
import { Arquitectura, ProjectCards } from '../interfaces/project-cards.interface';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  animations: [
    fadeInView
  ]
})
export class ProjectsSectionComponent implements OnInit {

  @ViewChildren(ProjectCardComponent ,{ read: ElementRef }) projs: any | undefined
  inViewList: Array<boolean> = [];
  colors = HeadingColors.DEFAULT_GRADIENT

  projects: Array<ProjectCards> = [
    {
      projectImg: 'structuresWizImg.png',
      projectName: 'Sistema Estatal de Ingresos (SEI)',
      projectDescription: 'Sistema integral para el manejo de datos vehiculares del estado de Durango. Incluye trámites de altas, bajas, cambios, replaqueos, concesiones vehiculares. Sistema de cobros, reportes y validaciones con arquitectura de microservicios.',
      isProjectLinkPresent: false,
      projectLiveLink: '',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: false,
      arquitectura: Arquitectura.MICRO,
      tecnologias: [
        { nombre: 'Java', logo: '' },
        { nombre: 'TypeScript', logo: '' },
        { nombre: 'Angular', logo: '' },
        { nombre: 'Spring Boot', logo: '' },
        { nombre: 'Hibernate', logo: '' },
        { nombre: 'Oracle', logo: '' },
        { nombre: 'AWS', logo: '' }
      ]
    },
    {
      projectImg: 'horrorscopeImg.png',
      projectName: 'Sistema de Incidencias (SIDI)',
      projectDescription: 'Plataforma para gestión de recursos humanos en el sector público. Manejo de faltas, permisos económicos, vacaciones, permisos de mando superior. Dashboard administrativo con filtros avanzados y reportes.',
      isProjectLinkPresent: false,
      projectLiveLink: '',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: false,
      arquitectura: Arquitectura.MONO,
      tecnologias: [
        { nombre: 'Java', logo: '' },
        { nombre: 'TypeScript', logo: '' },
        { nombre: 'Angular', logo: '' },
        { nombre: 'Spring Boot', logo: '' },
        { nombre: 'Hibernate', logo: '' },
        { nombre: 'Oracle', logo: '' }
      ]
    },
    {
      projectImg: 'horrorscopeImg.png',
      projectName: 'Sistema de Entrega Recepción Estatal (SERE)',
      projectDescription: 'Sistema digitalizado para procesos de entrega-recepción gubernamental. Roles configurables, notificaciones automáticas por email, gestión de unidades administrativas, secretarías y direcciones.',
      isProjectLinkPresent: false,
      projectLiveLink: '',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: false,
      arquitectura: Arquitectura.MONO,
      tecnologias: [
        { nombre: 'Java', logo: '' },
        { nombre: 'TypeScript', logo: '' },
        { nombre: 'Angular', logo: '' },
        { nombre: 'Spring Boot', logo: '' },
        { nombre: 'Hibernate', logo: '' },
        { nombre: 'Oracle', logo: '' }
      ]
    },
    {
      projectImg: 'clothingStoreImg.png',
      projectName: 'API Durango-Digital',
      projectDescription: 'API REST robusta para servicios gubernamentales digitales. Gestión de trámites vehiculares, registro civil, impuesto predial y declaraciones fiscales. Integración con múltiples sistemas.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://www.pagos.durango.gob.mx/',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: false,
      arquitectura: Arquitectura.MONO,
      tecnologias: [
        { nombre: 'Java', logo: '' },
        { nombre: 'Spring Boot', logo: '' },
        { nombre: 'Hibernate', logo: '' },
        { nombre: 'Oracle', logo: '' }
      ]
    },
    {
      projectImg: 'rub-inicio.png',
      projectName: 'Registro Único de Beneficiarios (RUB)',
      projectDescription: 'Sistema municipal para gestión de beneficiarios. Creación, supervisión y gestión de solicitudes ciudadanas. Interfaz intuitiva y procesos automatizados para mayor eficiencia.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://rub.municipiodurango.gob.mx/sign-in?redirectURL=%2Finicio',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: true,
      arquitectura: Arquitectura.MONO,
      tecnologias: [
        { nombre: 'Java', logo: '' },
        { nombre: 'Spring Boot', logo: '' },
        { nombre: 'Hibernate', logo: '' },
        { nombre: 'PostgreSQL', logo: '' },
        { nombre: 'Angular', logo: '' },
        { nombre: 'TypeScript', logo: '' }
      ]
    },
    {
      projectImg: 'licco-inicio.png',
      projectName: 'Licencias de Construcción (LICCO)',
      projectDescription: 'Plataforma digital para trámites de construcción. Gestión completa de licencias, uso de suelo, números oficiales. Incluye módulos de revisión, inspección y pagos en línea.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://desarrollourbanodigital.municipiodurango.gob.mx/#/login',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: true,
      arquitectura: Arquitectura.MONO,
      tecnologias: [
        { nombre: 'Java', logo: '' },
        { nombre: 'Spring Boot', logo: '' },
        { nombre: 'Hibernate', logo: '' },
        { nombre: 'PostgreSQL', logo: '' },
        { nombre: 'Angular', logo: '' },
        { nombre: 'TypeScript', logo: '' }
      ]
    },
    {
      projectImg: 'licco-inicio.png',
      projectName: 'Sistema de Apertura Rápida de Empresas (SDARE)',
      projectDescription: 'Sistema integral para registro empresarial. Gestión de empresas en ámbitos de Fomento Económico, Salud y Protección Civil. Procesos de alta, revisión, inspección y seguimiento automatizados.',
      isProjectLinkPresent: false,
      projectLiveLink: '',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: true,
      arquitectura: Arquitectura.MONO,
      tecnologias: [
        { nombre: 'Java', logo: '' },
        { nombre: 'Spring Boot', logo: '' },
        { nombre: 'Hibernate', logo: '' },
        { nombre: 'PostgreSQL', logo: '' },
        { nombre: 'Angular', logo: '' },
        { nombre: 'TypeScript', logo: '' }
      ]
    }
  ]

  // Filtros y categorías
  categories = ['Todos', 'Gobierno Digital', 'Sistemas Municipales', 'APIs'];
  selectedCategory = 'Todos';
  searchTerm = '';

  // Crear una propiedad privada para almacenar los proyectos filtrados
  private _filteredProjects: Array<ProjectCards> = [];

  // Getter para obtener los proyectos filtrados
  get filteredProjects(): Array<ProjectCards> {
    return this._filteredProjects;
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.toLowerCase();
    this.applyFilters();
  }

  trackByProject(index: number, project: ProjectCards): string | undefined {
    return project.projectName;
  }

  getCategoryTranslationKey(category: string): string {
    if (category.toLowerCase() === 'all') {
      return 'PROJECTS.CATEGORY_ALL';
    }
    return category;
  }

  trackByTech(index: number, tech: any): string {
    return tech.nombre;
  }

  getTechBadgeColor(tech: string): string {
    const techColors: { [key: string]: string } = {
      'Java': 'bg-orange-500/20 text-orange-300',
      'Angular': 'bg-red-500/20 text-red-300',
      'Spring Boot': 'bg-green-500/20 text-green-300',
      'TypeScript': 'bg-blue-500/20 text-blue-300',
      'Oracle': 'bg-red-600/20 text-red-400',
      'PostgreSQL': 'bg-blue-600/20 text-blue-400',
      'AWS': 'bg-yellow-500/20 text-yellow-300',
      'Hibernate': 'bg-purple-500/20 text-purple-300',
      'Docker': 'bg-cyan-500/20 text-cyan-300'
    };
    return techColors[tech] || 'bg-gray-500/20 text-gray-300';
  }

  constructor() { }

  ngOnInit(): void {
    // Inicializar los proyectos filtrados
    this._filteredProjects = [...this.projects];
  }

  applyFilters(): void {
    const filtered = this.projects.filter(project => {
      // Filtro por categoría
      let categoryMatch: boolean | undefined = true;

      if (this.selectedCategory !== 'Todos') {
        if (this.selectedCategory === 'Gobierno Digital') {
          categoryMatch = !project.freelance;
        } else if (this.selectedCategory === 'Sistemas Municipales') {
          categoryMatch = project.freelance;
        } else if (this.selectedCategory === 'APIs') {
          categoryMatch = project.projectName?.toLowerCase().includes('api') || false;
        }
      }

      // Filtro por búsqueda
      const searchMatch = !this.searchTerm ||
                         (project.projectName && project.projectName.toLowerCase().includes(this.searchTerm)) ||
                         (project.projectDescription && project.projectDescription.toLowerCase().includes(this.searchTerm)) ||
                         (project.tecnologias && project.tecnologias.some(tech => tech.nombre.toLowerCase().includes(this.searchTerm)));

      return categoryMatch && searchMatch;
    });

    // Asignar a la propiedad privada en lugar del getter
    this._filteredProjects = filtered;
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;

    this.projs.forEach((v: { nativeElement: { offsetTop: number; }; }, index: string | number) => {
      if (index && v && v.nativeElement.offsetTop <= scrollPosition) {
        this.inViewList[+index] = true;
      }
    })
  }
}
