import { Component, ElementRef, HostListener, ViewChild, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Subject, combineLatest, Observable } from 'rxjs';
import { map, startWith, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologiesSectionComponent implements OnInit, OnDestroy {

  inView : boolean = false;
  @ViewChild('techUsed') techUsed: ElementRef | undefined;

  colors = HeadingColors.DEFAULT_GRADIENT
  sizeXXL = IconSize.XXL;

  // Reactive state management with RxJS
  private destroy$ = new Subject<void>();
  private selectedCategory$ = new BehaviorSubject<string>('All');
  private showOnlyFeatured$ = new BehaviorSubject<boolean>(true);
  private currentPage$ = new BehaviorSubject<number>(1);
  private sortCriteria$ = new BehaviorSubject<'proficiency' | 'experience' | 'name'>('proficiency');

  // Observable streams for reactive programming
  public filteredTechnologies$!: Observable<Technology[]>;
  public paginatedTechnologies$!: Observable<Technology[]>;
  public totalPages$!: Observable<number>;
  public showPagination$!: Observable<boolean>;
  public categoryCount$!: Observable<{ [key: string]: number }>;

  constructor(private cdr: ChangeDetectorRef) {
    this.setupReactiveStreams();
  }

  ngOnInit(): void {
    // Initialize component
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupReactiveStreams(): void {
    // Setup filtered technologies stream
    this.filteredTechnologies$ = combineLatest([
      this.selectedCategory$,
      this.showOnlyFeatured$,
      this.sortCriteria$
    ]).pipe(
      debounceTime(150),
      distinctUntilChanged(),
      map(([category, featured, sortBy]) => {
        let filtered = [...this.technologies];

        // Apply category filter
        if (category !== 'All') {
          filtered = filtered.filter(tech => tech.categoria === category);
        }

        // Apply featured filter
        if (featured) {
          filtered = filtered.filter(tech => tech.featured);
        }

        // Apply sorting
        filtered.sort((a, b) => {
          switch (sortBy) {
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

        return filtered;
      }),
      takeUntil(this.destroy$)
    );

    // Setup paginated technologies stream
    this.paginatedTechnologies$ = combineLatest([
      this.filteredTechnologies$,
      this.currentPage$
    ]).pipe(
      map(([technologies, page]) => {
        const startIndex = (page - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return technologies.slice(startIndex, endIndex);
      }),
      takeUntil(this.destroy$)
    );

    // Setup total pages stream
    this.totalPages$ = this.filteredTechnologies$.pipe(
      map(technologies => Math.ceil(technologies.length / this.itemsPerPage)),
      takeUntil(this.destroy$)
    );

    // Setup show pagination stream
    this.showPagination$ = this.filteredTechnologies$.pipe(
      map(technologies => technologies.length > this.itemsPerPage),
      takeUntil(this.destroy$)
    );

    // Setup category count stream
    this.categoryCount$ = this.showOnlyFeatured$.pipe(
      map(featured => {
        const count: { [key: string]: number } = {};
        this.categories.forEach(category => {
          if (category === 'All') {
            count[category] = featured
              ? this.technologies.filter(t => t.featured).length
              : this.technologies.length;
          } else {
            const filtered = this.technologies.filter(t => t.categoria === category);
            count[category] = featured
              ? filtered.filter(t => t.featured).length
              : filtered.length;
          }
        });
        return count;
      }),
      takeUntil(this.destroy$)
    );
  }

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

  // Reactive getters for backwards compatibility with template
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

  // Enhanced methods with reactive programming
  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.selectedCategory$.next(category);
    this.currentPage = 1;
    this.currentPage$.next(1);
    this.cdr.markForCheck();
  }

  toggleFeaturedView(): void {
    this.showOnlyFeatured = !this.showOnlyFeatured;
    this.showOnlyFeatured$.next(this.showOnlyFeatured);
    this.currentPage = 1;
    this.currentPage$.next(1);
    this.cdr.markForCheck();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.currentPage$.next(this.currentPage);
      this.cdr.markForCheck();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.currentPage$.next(this.currentPage);
      this.cdr.markForCheck();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.currentPage$.next(page);
      this.cdr.markForCheck();
    }
  }

  // Método mejorado para ordenamiento dinámico
  sortTechnologies(criteria: 'proficiency' | 'experience' | 'name'): void {
    this.sortCriteria$.next(criteria);
    this.cdr.markForCheck();
  }

  trackByTechnology(index: number, tech: Technology): number {
    return tech.id;
  }

  trackByCategory(index: number, category: string): string {
    return category;
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
      if (!this.inView) {
        this.inView = true;
        this.cdr.markForCheck();
      }
    }
  }

}
