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
  constructor() { }

  ngOnInit(): void {

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
